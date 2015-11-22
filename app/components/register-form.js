import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    register(){

      const { name, username, password } = this.getProperties('name', 'username', 'password');
      var self = this;

      Ember.$.post('/register', {name, username, password}, function(response){
        self.set('successMessage', response.user);
      });

    }
  }
});
