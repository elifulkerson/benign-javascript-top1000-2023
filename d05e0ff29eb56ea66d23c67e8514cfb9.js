document.addEventListener('DOMContentLoaded', function(){
                        var columnInput = document.getElementById('Culture-button');

						if (!columnInput) return; // Sticky nav replaces the nav so element no longer exists for users in test.

						columnInput.addEventListener('keydown', function(e){
                            // keyCode: 13 => Enter key | keyCode: 32 => Space key
                            if (e.keyCode === 13 || e.keyCode === 32) {
                                e.preventDefault()
                                document.getElementById('Culture-checkbox-input').click();
                            }
                        })
                    })