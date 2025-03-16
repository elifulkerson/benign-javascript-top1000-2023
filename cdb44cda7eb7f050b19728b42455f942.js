mr.encrypt = new mr.encryptor({
								endpoint: '/apic',
								type: 'xor',
								encode: 'hex',
								key: 'f22f652bac45d1ec3e631b81f57d8623',
								keyId: '1',
								getUrl: function (url) {
									return url
								}
							})