/**
 * Created by yijaejun on 2016. 4. 10..
 */

if(Meteor.isClient){
	Template.registerHelper('incremented', function (index) {
		index++;
		return index;
	});
}