const assert            = require('assert');
const sendEmailThankyou = require('../../src/hooks/send-email-thankyou');

describe('\'sendEmailThankyou\' hook', () => {
    it('runs the hook', () => {
        // A mock hook object
        const mock = {
            app:    {
                get: (name) => {
                    switch (name) {
                    case 'nodemailerService':
                        return {
                            sendMail: (obj, cb) => {
                                return cb();
                            }
                        };
                        break;
                    case 'linksUrl':
                        return;
                        break;
                    }
                },
            },
            result: {
                donationOffer: {}
            }
        };
        // Initialize our hook with no options
        const hook = sendEmailThankyou();

        // Run the hook function (which returns a promise)
        // and compare the resulting hook object
        return hook(mock).then(result => {
            assert.equal(result, mock, 'Returns the expected hook object');
        });
    });
});
