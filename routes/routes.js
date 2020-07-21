import { FlowRouterTitle } from 'meteor/ostrio:flow-router-title';
import { Utils } from './../utils/Utils.js';

FlowRouter.route('/a', {
    action: function(params, queryParams) {
            BlazeLayout.render('hello');
    },
		title: 'Title ' + Utils.absoluteUrl()

});

FlowRouter.route('/b/:id', {
    action: function(params, queryParams) {
        BlazeLayout.render('info')
    },
    title: 'Title ' + Utils.absoluteUrl()
});



if(Meteor.isClient){
	new FlowRouterTitle(FlowRouter);
}

