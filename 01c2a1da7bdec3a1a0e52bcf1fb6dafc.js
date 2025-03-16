(function () {
    /* Rate 0.46% as of October 16, 2023 */
    const SAVINGS_RATE = .46;
    const parseNumber = function (string) {
        // Credits: lifted from formula.js
        if (string === undefined || string === '') {
            return error.value;
        }
        if (!isNaN(string)) {
            return parseFloat(string);
        }

        return error.value;
    };

    const FV = function (rate, periods, payment, value, type) {
        // Credits: lifted from formula.js

        value = value || 0;
        type = type || 0;

        rate = parseNumber(rate);
        periods = parseNumber(periods);
        payment = parseNumber(payment);
        value = parseNumber(value);
        type = parseNumber(type);

        // Return future value
        var result;
        if (rate === 0) {
            result = value + payment * periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = value * term + payment * (1 + rate) * (term - 1) / rate;
            } else {
                result = value * term + payment * (term - 1) / rate;
            }
        }
        return -result;
    };

    const _dispatchEvent = function (name, data) {
        const event = new CustomEvent(name, {
            detail: data,
            bubbles: true,
            cancelable: true,
            composed: false
        });
        dispatchEvent(event);
    };
    const calculateInterest = function (total, years, ratePercent, roundToPlaces) {
        var interestRate = ((ratePercent / 100) + 1);
        return +(total * Math.pow(interestRate, years)).toFixed(roundToPlaces || 2);
    };
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });
    const coreGrowthChart = {
        init: function (chartContainer) {
            Highcharts.setOptions({
                chart: {
                    styledMode: true
                },
                credits: {
                    enabled: false
                },
                lang: {
                    thousandsSep: ','
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    areaspline: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            });
            coreGrowthChart.chart = new Highcharts.chart(chartContainer, {
                chart: {
                    backgroundColor: 'transparent',
                    reflow: true,
                    type: 'areaspline'
                },
                pane: {
                    size: '100%'
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + ': </b>' + this.x + '<br/>$' + Highcharts.numberFormat(this.y, 0, '.', ',');
                    }
                },
                labels: {
                    reserveSpace: true
                },
                title: {
                    text: null
                },
                xAxis: {
                    tickInterval: 5,
                    labels: {
                        rotation: 0,
                        allowOverlap: true,
                        style: {
                            textOverflow: 'hidden'
                        }
                    }
                },
                yAxis: [{
                    startOnTick: false,
                    visible: false
                },
                {
                    startOnTick: false,
                    visible: false
                }],
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Savings',
                    data: [
                    ]
                }, {
                    name: 'Investment',
                    data: [
                    ]
                }]
            });
            var savingsRate = SAVINGS_RATE;
            var investRate = 7;
            var totalsBox;
            var years = 30;
            var startSeries = function (event) {
                var investAmt = parseInt(coreGrowthChart.startingInvestment.value, 10);
                investAmt = (investAmt > 0) ? investAmt : 1;
                var principal = investAmt;
                var newSavingsPrincipal = principal;
                var newInvestPrincipal = principal;
                var max = 1000;
                if (investAmt > max) {
                    investAmt = max;
                    investAmt.value = max;
                    coreGrowthChart.startingInvestmentPVD.setAttribute('pvd-value', max);
                }
                var timePeriod = years;
                var initData = [principal];
                var investData = [principal];
                var xAxisLabels = ['Today'];
                for (var i = 0; i < timePeriod; i++) {
                    newInvestPrincipal = +(FV((investRate / 12) / 100, (i + 1) * 12, -investAmt, 0, 0)).toFixed(2);
                    newSavingsPrincipal = +(FV((savingsRate / 12) / 100, (i + 1) * 12, -investAmt, 0, 0)).toFixed(2);
                    initData.push(newSavingsPrincipal);
                    investData.push(newInvestPrincipal);
                    xAxisLabels.push('Year&nbsp;' + (i + 1));
                }
                coreGrowthChart.chart.update({
                    xAxis: {
                        categories: xAxisLabels,
                        labels: {
                            formatter: function () {
                                if (this.isLast || this.isFirst) {
                                    return this.value;
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Savings',
                        data: initData,
                        yAxis: 0,
                        zIndex: 1
                    }, {
                        name: 'Investment',
                        data: investData,
                        yAxis: 0
                    }]
                });
                var yAxisInvest = coreGrowthChart.chart.yAxis[0];
                var yAxisSavings = coreGrowthChart.chart.yAxis[1];

                var investOutput = document.getElementById(coreGrowthChart.investOutputTotalID);
                var investTotal = coreGrowthChart.chart.series[1].points[coreGrowthChart.chart.series[1].points.length - 1];
                var savingsOutput = document.getElementById(coreGrowthChart.savingsOutputTotalID);
                var savingsTotal = coreGrowthChart.chart.series[0].points[coreGrowthChart.chart.series[0].points.length - 1];
                var maxInput = parseInt(document.getElementById('rangeInputField').getAttribute('max'));
                var yAxisTopMostValue = +(FV((investRate / 12) / 100, timePeriod * 12, -maxInput, 0, 0)).toFixed(2);;

                yAxisInvest.setExtremes(0, yAxisTopMostValue, true, true);
                yAxisSavings.setExtremes(0, yAxisTopMostValue, true, true);

                if (totalsBox !== undefined) {
                    investOutput.innerHTML = ''
                    savingsOutput.innerHTML = ''
                }

                investOutput.innerHTML = '$' + Highcharts.numberFormat(investTotal.y, 0, '.', ',');
                savingsOutput.innerHTML = '$' + Highcharts.numberFormat(savingsTotal.y, 0, '.', ',');
                coreGrowthChart.chart.series[0].setData(initData);
                coreGrowthChart.chart.series[1].setData(investData);
            };
            window.addEventListener('load', startSeries, false);
            coreGrowthChart.startingInvestment.addEventListener('input', startSeries, false);
        }
    };
    const rangeInputComponent = {
        rangeMax: null,
        rangeMin: null,
        rangeValue: null,
        rangeStep: 1,
        formatCurrency: (value) => {
            return USDollar.format(value);
        },
        getRangeMax: () => {
            return rangeInputComponent.rangeInputField.getAttribute('max');
        },
        setRangeMax: (max) => {
            rangeInputComponent.rangeInputField.setAttribute('max', max);
            rangeInputComponent.rangeLabelMax.innerHTML = rangeInputComponent.formatCurrency(max.toString());
            rangeInputComponent.rangeMax = rangeInputComponent.getRangeMax();
        },
        getRangeMin: () => {
            return rangeInputComponent.rangeInputField.getAttribute('min');
        },
        setRangeMin: (min) => {
            rangeInputComponent.rangeInputField.setAttribute('min', min);
            rangeInputComponent.rangeLabelMin.innerHTML = rangeInputComponent.formatCurrency((min === 0) ? '1' : min.toString());
            rangeInputComponent.rangeMin = rangeInputComponent.getRangeMin();
        },
        getRangeStep: () => {
            return rangeInputComponent.rangeInputField.getAttribute('step');
        },
        setRangeStep: (step) => {
            rangeInputComponent.rangeInputField.setAttribute('step', step);
        },
        getRangeValue: () => {
            return rangeInputComponent.rangeInputField.getAttribute('value');
        },
        setRangeValue: (value) => {
            rangeInputComponent.rangeInputField.setAttribute('value', value || rangeInputComponent.rangeMin);
        },
        getBackgroundSize: (max, min, value) => {
            const _max = +max || 0;
            const _min = +min || 0;
            const size = ((value - _min) / (_max - _min)) * 100;
            return size;
        },
        setBackgroundSize: (max, min, value) => {
            const size = rangeInputComponent.getBackgroundSize(max, min, value);
            rangeInputField.style.setProperty(
                '--range-background-size',
                size + '%'
            );
        },
        getRangeOutput: () => {
            return rangeInputComponent.rangeOutput.innerHTML;
        },
        setRangeOutput: (value) => {
            rangeInputComponent.rangeOutput.innerHTML = rangeInputComponent.formatCurrency(value || 1);
        },
        rangeInputUpdated: () => {
            rangeInputComponent.rangeValue = rangeInputComponent.rangeInputField.valueAsNumber;
            const parcel = {
                value: rangeInputComponent.rangeValue || 0
            };
            rangeInputComponent.setBackgroundSize(
                parseInt(rangeInputComponent.rangeMax, 10),
                parseInt(rangeInputComponent.rangeMin, 10),
                parseInt(rangeInputComponent.rangeValue, 10)
            );
            rangeInputComponent.setRangeOutput(rangeInputComponent.rangeValue);
            _dispatchEvent('rangeInputUpdated', parcel);
        },
        init: (max, min, step, value) => {
            rangeInputComponent.setRangeMax(max);
            rangeInputComponent.setRangeMin(min);
            rangeInputComponent.setRangeStep(step);
            rangeInputComponent.setRangeValue(value);
            rangeInputComponent.setBackgroundSize(max, min, value);
            rangeInputComponent.setRangeOutput(value);
        }
    };
    document.addEventListener('DOMContentLoaded', function () {
        coreGrowthChart.startingInvestment = document.querySelector('#rangeInputField');
        coreGrowthChart.startingInvestmentPVD = document.querySelector('pvd-input[pvd-id="rangeInputField"]');
        coreGrowthChart.rangeSlider = document.querySelector('.prometheus-growth-chart__range-input input');
        coreGrowthChart.investOutputTotalID = 'prometheus-growth-chart__invest-total';
        coreGrowthChart.savingsOutputTotalID = 'prometheus-growth-chart__savings-total';
        coreGrowthChart.startingInvestment.addEventListener('input', coreGrowthChart.startSeries, false);
        rangeInputComponent.rangeInputField = document.getElementById('rangeInputField');
        rangeInputComponent.rangeLabelMax = document.getElementById('rangeLabelMax');
        rangeInputComponent.rangeLabelMin = document.getElementById('rangeLabelMin');
        rangeInputComponent.rangeOutput = document.getElementById('rangeOutput');
        coreGrowthChart.init('chartContainer');
        /**
        * rangeInputComponent.init: (max, min, step, value)
        * max: retirement Year + buffer
        * min: current Year
        * step: 100 (dollars)
        * value: contribution
        */
        rangeInputComponent.init(
            1000,
            0,
            10,
            250
        );
        rangeInputComponent.rangeInputUpdated();
        rangeInputComponent.rangeInputField.addEventListener('input', () => {
            rangeInputComponent.rangeInputUpdated();
        });
    });
})()
