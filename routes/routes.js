import { FlowRouterTitle } from 'meteor/ostrio:flow-router-title';
import { Utils } from './../utils/Utils.js';

FlowRouter.route('/a', {
    action: function(params, queryParams) {
            BlazeLayout.render('hello');
    },
		title: 'Title ' + Utils.absoluteUrl()

});

FlowRouter.route('/b', {
    action: function(params, queryParams) {
        BlazeLayout.render('loops')
    },
    title: 'Title ' + Utils.absoluteUrl()
});



if(Meteor.isClient){
	new FlowRouterTitle(FlowRouter);
}

