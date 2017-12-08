const { Given, Then, When } = require('cucumber');

Given(/^The contact list is display$/, function (callback){
    this.browser.visit("/", (err) => {
        if (err) throw err;
        var tab = this.browser.queryAll('table tbody td');
        var contact=this.browser.tabs.current.Contact.Contacts.instance();
        var iterator = contact.iterator();
        var tableau = [];
        var i=0;
        var j=0;
        var k=contact.iterator();

        while(k.hasNext()){
            var val=k.next();
            this.browser.assert.equal(tableau[j],tab[i+1].innertText);
            j++;
            i++;
        }
        callback();
    });
});


When(/^User clicks on sort button$/, function (callback){
    this.browser.visit("/", (err) => {
        if (err) throw err;
        var bouton=this.browser.query('#button_sort');
        bouton.click();
        callback();
    });
});


Then(/^All contacts are sorted$/, function (callback){
    this.browser.visit("/", (err) => {
        if (err) throw err;
        var contact=this.browser.tabs.current.Contact.Contacts.instance();
        var tableau=[];
        var iterator = contact.iterator();
        var i=1;
        var cpt=0;
        var n=0;
        var tab = this.browser.queryAll('table tbody td');

        while(iterator.hasNext()){
            contact=iterator.next();
            tableau[cpt]=contact.lastName();
            cpt++;
        }

        tableau.sort();

        for(n;contact.length;n++){
            this.browser.assert.success(contact[i],tab[i].innertText);
            i++;
        }


        callback();
    });
});
