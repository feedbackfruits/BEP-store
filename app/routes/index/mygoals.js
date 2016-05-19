import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return mockMaker().multipleGoals();
});
