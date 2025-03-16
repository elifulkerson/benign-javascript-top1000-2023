let csv = '//ep01.epimg.net/estaticos/arc/2023/10/widget_ecuador_2vuelta/ecuador - data.csv?v=' + new Date().toLocaleString().replace(/[^a-zA-Z0-9]/g, '');
        let csvData;
        d3.csv(csv)
            .then(function(data) {
                csvData = data;
                setElectionData(csvData);
            });
        
        let currentWidth = window.innerWidth;
        window.addEventListener('resize', function() {
            if(currentWidth != window.innerWidth) {
                updateElectionData(csvData);
            }
        });

        function setElectionData(data) {
            //Luisa González: 0
            //Daniel Noboa: 1
            //Votos en blanco: 2
            //Votos nulos: 3
            //Sufragantes: 4
            //Electores total: 5
            //Escrutinio / Actos: 6
            //Hora de actualización: 7

            //Información genérica
            document.getElementById('porc_esc').textContent = textWithCommas(data[6].porcentaje) + '%';
            //document.getElementById('porc_part').textContent = textWithCommas(((parseInt(replacePossibleDots(data[4].absoluto)) * 100) / parseInt(replacePossibleDots(data[5].absoluto))).toFixed(1)) + '%';

document.getElementById('porc_part').textContent =  '82,33%';

            document.getElementById('porc_blancos').textContent = textWithCommas(data[2].porcentaje) + '%';
            //document.getElementById('total_blancos').textContent = textWithDots(replacePossibleDots(data[2].absoluto));
            document.getElementById('porc_nulos').textContent = textWithCommas(data[3].porcentaje) + '%';
            //document.getElementById('total_nulos').textContent = textWithDots(replacePossibleDots(data[3].absoluto));
    
            //Candidatos
            document.getElementById('porc_1').textContent = textWithCommas(data[0].porcentaje) + '%';
            document.getElementById('porcss_1').style.width = totalToPerc(data[0].porcentaje);
            document.getElementById('vot_1').textContent = textWithDots(replacePossibleDots(data[0].absoluto));
    
            document.getElementById('porc_2').textContent = textWithCommas(data[1].porcentaje) + '%';
            document.getElementById('porcss_2').style.width = totalToPerc(data[1].porcentaje);
            document.getElementById('vot_2').textContent = textWithDots(replacePossibleDots(data[1].absoluto));

            //Hora de actualización
            let timeCsv = data[7].porcentaje;
            //Cambio de fecha
            let hourCsv = timeCsv.split(':')[0];
            let minutesCsv = timeCsv.split(':')[1];
            let today = new Date();
            today.setHours(hourCsv);
            today.setMinutes(minutesCsv);
            today.setHours(today.getHours() - 7);
            document.getElementById('time').textContent = today.toLocaleTimeString('es-EC', {hour: '2-digit', minute:'2-digit'}) + ' (GMT-5)';
        }

        function updateElectionData(data) {
            document.getElementById('porcss_1').style.width = totalToPerc(data[0].porcentaje);
            document.getElementById('porcss_2').style.width = totalToPerc(data[1].porcentaje);
        }
        
        //Helpers
        function replacePossibleDots(data) {
            return data.toString().replace('.','');
        }
        function totalToPerc(data) {
            return parseFloat(data.replace(',','.')) + '%';
        }
    
        function textWithCommas(number) {
            return number.toString().replace('.',',');
        }
    
        function textWithDots(number) {
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }