async function qrSelector(elementId, dataUri, dataValue) {
    let d = dataValue;

    if (d === undefined) {
        try {
            const r = await fetch(dataUri);
            const text = await r.text();
            console.log(text)
            d = text;
        } catch (e) {
            console.log(e)
            return;
        }
    }

    const qrTypeSelector = document.getElementById(elementId);
    qrTypeSelector.addEventListener('change', function () {
        const selectedQRType = qrTypeSelector.value;
        updateQRInputForm(selectedQRType);
    });
}


function updateQRInputForm(qrType) {
    const qrInputContainer = document.getElementById(`${element_id} container`);
    switch (qrType) {
        case 'url':
            qrInputContainer.innerHTML = '<label for="urlInput">URL:</label><input type="text" id="urlInput">';
            break;
        case 'text':
            qrInputContainer.innerHTML = '<label for="textInput">Text:</label><input type="text" id="textInput">';
            break;
        case 'vcard':
            qrInputContainer.innerHTML = `
              <label for="vcardName">Name:</label><input type="text" id="vcardName"><br>
              <label for="vcardEmail">Email:</label><input type="text" id="vcardEmail"><br>
              <label for="vcardPhone">Phone:</label><input type="text" id="vcardPhone"><br>
              <label for="vcardOrg">Organization:</label><input type="text" id="vcardOrg">
          `;
            break;
        case 'email':
            qrInputContainer.innerHTML = '<label for="emailInput">Email:</label><input type="text" id="emailInput">';
            break;
        case 'sms':
            qrInputContainer.innerHTML = `
            <label for="smsPhone">Phone Number:</label><input type="text" id="smsPhone"><br>
            <label for="smsMessage">Message:</label><input type="text" id="smsMessage">
          `;
            break;
        case 'wifi':
            qrInputContainer.innerHTML = `
              <label for="wifiSSID">SSID:</label><input type="text" id="wifiSSID"><br>
              <label for="wifiPassword">Password:</label><input type="text" id="wifiPassword"><br>
              <label for="wifiEncryption">Encryption:</label>
              <select id="wifiEncryption">
                  <option value="WEP">WEP</option>
                  <option value="WPA">WPA</option>
                  <option value="WPA2">WPA2</option>
              </select>
          `;
            break;
        case 'bitcoin':
            qrInputContainer.innerHTML = '<label for="bitcoinAddress">Bitcoin Address:</label><input type="text" id="bitcoinAddress">';
            break;
        case 'socialMedia':
            qrInputContainer.innerHTML = `
              <label for="socialFacebook">Facebook:</label><input type="text" id="socialFacebook"><br>
              <label for="socialTwitter">Twitter:</label><input type="text" id="socialTwitter">
          `;
            break;
        case 'coupon':
            qrInputContainer.innerHTML = '<label for="couponInput">Coupon Code:</label><input type="text" id="couponInput">';
            break;
        case 'telephone':
            qrInputContainer.innerHTML = '<label for="telephoneInput">Telephone Number:</label><input type="text" id="telephoneInput">';
            break;
        case 'event':
            qrInputContainer.innerHTML = '<label for="eventTitleInput">Event Title:</label><input type="text" id="eventTitleInput"><br>' +
                '<label for="eventDateInput">Event Date:</label><input type="date" id="eventDateInput"><br>' +
                '<label for="eventLocationInput">Event Location:</label><input type="text" id="eventLocationInput">';
            break;
        case 'business':
            qrInputContainer.innerHTML = '<label for="businessNameInput">Business Name:</label><input type="text" id="businessNameInput"><br>' +
                '<label for="businessAddressInput">Business Address:</label><input type="text" id="businessAddressInput"><br>' +
                '<label for="businessPhoneInput">Business Phone:</label><input type="text" id="businessPhoneInput"><br>' +
                '<label for="businessWebsiteInput">Business Website:</label><input type="text" id="businessWebsiteInput">';
            break;
        default:
            break;
    }
}
