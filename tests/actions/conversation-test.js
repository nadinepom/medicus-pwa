/*
IBM Watson Assistant (Conversation) Test

   Version: 17/07/2018
   Author: mamoonraja
   URL: https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk/blob/master/tests/actions/conversation-test.js
*/



const action = require('../../actions/conversation');
const assert = require('assert');
const nock = require('nock');

const workspace_id = 'fake-id';

describe('[action] Conversation', function() {
  beforeEach(function() {
    nock('https://gateway.watsonplatform.net:443')
      .post(`/assistant/api/v1/workspaces/${workspace_id}/message`)
      .query({
        'version': '2018-07-10'
      })
      .reply(200, {
        'fake-key': 'fake-value'
      });
  });

  it('should throw error if credentials are missing', function() {
    const params = {
      input: 'fake input',
      context: {},
      workspace_id: workspace_id
    };
    return action.main(params).then(function() {
      assert.fail('Missing credentials error was not found');
    }).catch(function(error) {
      assert(error.message === 'params.username and params.iam_apikey cannot be null');
    });
  });

  it('should call Conversation when the parameters are right', function() {
    const params = {
      input: 'fake input',
      context: {},
      username: 'foo',
      password: 'bar',
      workspace_id: workspace_id
    };
    return action.main(params).then(function() {
      assert(true);
    }).catch(assert.ifError);
  });
});
