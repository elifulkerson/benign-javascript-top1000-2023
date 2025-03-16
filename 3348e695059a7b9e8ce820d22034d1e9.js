/**
 * Module Loyalty
 */
 var Loyalty = (function () {
    'use strict';

    var Constructor = function(options) {
        if (options.brand == '' || typeof options.brand == 'undefined' || typeof options.brand != 'string') {
            throw new Error('brand arguments required');
        }

        this.brand = options.brand;

        if (options.baseurl == '' || typeof options.baseurl == 'undefined' || typeof options.baseurl != 'string') {
            throw new Error('baseurl arguments required');
        }
        this.baseurl = options.baseurl;
 

        this.tags = null;
        if (typeof options.tags == 'string') {
            this.tags = options.tags
        } 
    };

    Constructor.prototype.getcampaign = async function(tags) {
        if (tags == '' || typeof tags != 'string') {
            return null;
        }

        const response = await fetch(`${this.baseurl}api/loyalty/campaign/${this.brand}`, {
            method: 'POST',
            body: JSON.stringify({
                tags: tags
            }),
        });

        const campaigns = await response.json();
        let hashid = [];
        if (campaigns.status) {
            campaigns.data.map(function(item) {
                hashid.push(item.hashid);
            });

            return hashid.join()
        }

        return null;
    }

    Constructor.prototype.openarticle = async function(params) {
        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' && typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.activity_flag == '' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const campaigns = await this.getcampaign(this.tags);
        const hash_id = campaigns;

        const response = await fetch(`${this.baseurl}api/loyalty/activity/${this.brand}`, {
            method: 'POST', 
            body: JSON.stringify({
                kompas_id: params.kompas_id,
                code: 'OPEN_ARTICLE',
                activity_flag: params.activity_flag,
                hash_id: hash_id
            })
        });
        const res = await response.json();
        if (res.hasOwnProperty('status') && res.status) {
            console.info('loyalty: successfully open article...')
        } else {
            console.info(`loyalty: ${res.message}`)
        }
    };

    Constructor.prototype.readarticle = async function(params) {
        if (params.element == '' || typeof params.element == 'undefined' || typeof params.element != 'object') {
            throw new Error('required element');
        }

        if (params.time == '' || typeof params.time == 'undefined' || typeof params.time != 'number') {
            throw new Error('required time');
        }

        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' || typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.activity_flag == 'undefined' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const campaigns = await this.getcampaign(this.tags);
        const hash_id = campaigns;

        var scrolled = false;
        var i = 1;
        var _this = this;
        var trigger_interval = setInterval(() => {
            window.onscroll = function() {
                const el = params.element;
                if (el.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                    scrolled = true;                   
                }
            }
            if (scrolled) {
                if (i >= params.time) {
                    fetch(`${_this.baseurl}api/loyalty/activity/${_this.brand}`, {
                        method: 'POST', 
                        body: JSON.stringify({
                            kompas_id: params.kompas_id,
                            code: 'READ_ARTICLE',
                            activity_flag: params.activity_flag,
                            hash_id: hash_id
                        })
                    }).then(function(response) {
                        return response.json();
                    }).then(function(res) {
                        if (res.hasOwnProperty('status') && res.status) {
                            console.info('loyalty: successfully read article...')
                        } else {
                            console.info(`loyalty: ${res.message}`)
                        }
                    });

                    clearInterval(trigger_interval);
                    scrolled = false;
                }
            }
            i++;
        }, 1000);
    };

    Constructor.prototype.kuisactivity = async function(params) {
        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' && typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.activity_flag == '' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const now = new Date();
        const hour = now.getHours();
        const timetrigger = [9, 11, 14, 17, 20];

        if (timetrigger.includes(hour)) {
            const campaigns = await this.getcampaign(this.tags);
            const hash_id = campaigns;

            const response = await fetch(`${this.baseurl}api/loyalty/activity/${this.brand}`, {
                method: 'POST', 
                body: JSON.stringify({
                    kompas_id: params.kompas_id,
                    code: 'KUIS',
                    activity_flag: params.activity_flag,
                    hash_id: hash_id
                })
            });
            const res = await response.json();
            if (res.hasOwnProperty('status') && res.status) {
                console.info('loyalty: successfully play kuis...')
            } else {
                console.info(`loyalty: ${res.message}`)
            }
        }
    };

    Constructor.prototype.ttsactivity = async function(params) {
        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' && typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.activity_flag == '' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const campaigns = await this.getcampaign(this.tags);
        const hash_id = campaigns;

        const response = await fetch(`${this.baseurl}api/loyalty/activity/${this.brand}`, {
            method: 'POST', 
            body: JSON.stringify({
                kompas_id: params.kompas_id,
                code: 'TTS',
                activity_flag: params.activity_flag,
                hash_id: hash_id
            })
        });
        const res = await response.json();
        if (res.hasOwnProperty('status') && res.status) {
            console.info('loyalty: successfully play tts...')
        } else {
            console.info(`loyalty: ${res.message}`)
        }
    };

    Constructor.prototype.openvideo = async function(params) {
        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' && typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.activity_flag == '' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const campaigns = await this.getcampaign(this.tags);
        const hash_id = campaigns;

        const response = await fetch(`${this.baseurl}api/loyalty/activity/${this.brand}`, {
            method: 'POST', 
            body: JSON.stringify({
                kompas_id: params.kompas_id,
                code: 'OPEN_VIDEO',
                activity_flag: params.activity_flag,
                hash_id: hash_id
            })
        });
        const res = await response.json();
        if (res.hasOwnProperty('status') && res.status) {
            console.info('loyalty: successfully open video...')
        } else {
            console.info(`loyalty: ${res.message}`)
        }
    };

    Constructor.prototype.watchvideo = async function(params) {
        if (params.element == '' || typeof params.element == 'undefined' || typeof params.element != 'object') {
            throw new Error('required element');
        }

        if (params.time == '' || typeof params.time == 'undefined' || typeof params.time != 'number') {
            throw new Error('required time');
        }
        
        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' && typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.activity_flag == '' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const campaigns = await this.getcampaign(this.tags);
        const hash_id = campaigns;

        var i = 1;
        var _this = this;
        var trigger_interval = setInterval(() => {
            const current_time = params.element.currentTime;
            if (i >= params.time && current_time >= params.time) {
                fetch(`${_this.baseurl}api/loyalty/activity/${_this.brand}`, {
                    method: 'POST', 
                    body: JSON.stringify({
                        kompas_id: params.kompas_id,
                        code: 'WATCH_VIDEO',
                        activity_flag: params.activity_flag,
                        hash_id: hash_id
                    })
                }).then(function(response) {
                    return response.json();
                }).then(function(res) {
                    if (res.hasOwnProperty('status') && res.status) {
                        console.info('loyalty: successfully watch video...')
                    } else {
                        console.info(`loyalty: ${res.message}`)
                    }
                });
                clearInterval(trigger_interval);
            }
            i++;
        }, 1000);
    };

    Constructor.prototype.gameactivity = async function(params) {
        if (params.kompas_id == '' || typeof params.kompas_id == 'undefined' && typeof params.kompas_id != 'string') {
            throw new Error('required kompas_id');
        }

        if (params.time == '' || typeof params.time == 'undefined' || typeof params.time != 'number') {
            throw new Error('required time');
        }

        if (params.activity_flag == '' || typeof params.activity_flag == 'undefined' || typeof params.activity_flag != 'string') {
            throw new Error('required activity_flag');
        }

        const campaigns = await this.getcampaign(this.tags);
        const hash_id = campaigns;

        var i = 1;
        var _this = this;
        var trigger_interval = setInterval(() => {
            if (i >= params.time) {
                fetch(`${_this.baseurl}api/loyalty/activity/${_this.brand}`, {
                    method: 'POST', 
                    body: JSON.stringify({
                        kompas_id: params.kompas_id,
                        code: 'GAMES',
                        activity_flag: params.activity_flag,
                        hash_id: hash_id
                    })
                }).then(function(response) {
                    return response.json();
                }).then(function(res) {
                    if (res.hasOwnProperty('status') && res.status) {
                        console.info('loyalty: successfully play game...')
                    } else {
                        console.info(`loyalty: ${res.message}`)
                    }
                });

                clearInterval(trigger_interval);
            }
            i++;
        }, 1000);
    };

    return Constructor;
})();