
const { Given, Then, When } = require('cucumber');

Given(/^The contact list is display$/, function (callback){
    this.browser.visit("/", (err) => {
        var tab = this.browser.queryAll('table tbody th');
        this.browser.assert.success(tab[0].innerHTML === "First name");
        this.browser.assert.success(tab[1].innerHTML === "Last name");
        this.browser.assert.success(tab[2].innerHTML === "Phones");
        this.browser.assert.success(tab[3].innerHTML === "Mails");
        this.browser.assert.success(tab[4].innerHTML === "Tags");
        this.browser.assert.success(tab[0].innerHTML === "Actions");
        callback();
    });
});

When(/^User clicks on remove button of the first contact$/, function (callback){
    this.browser.visit("/",(err) => {
        if (err) throw err;
        var bouton=this.browser.query('table tr td a');
        bouton.click();
        callback();
    });
});

Then(/^The first contact is removed$/, function (callback){
    this.browser.visit("/", (err) => {
        var contact=this.browser.tabs.current.Contact.Contacts.instance();
        var iterator = contact.iterator();
        contact=iterator.next();
        this.browser.assert.success(contact.firstName(),"Eric");
        callback();
    });
});




