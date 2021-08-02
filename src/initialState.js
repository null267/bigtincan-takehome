import Faker from 'faker/locale/en';
import id from 'uuid';

export default createState = () => {
    const stateList = [];
    for (let i = 0; i<15; i+=1) {
        const cardData = {};
        cardData['id'] = id();
        cardData['avatar'] = Faker.internet.avatar(),
        cardData['firstName'] = Faker.name.firstName(),
        cardData['lastName'] = Faker.name.lastName(),
        cardData['initials'] = cardData['firstName'][0].toUpperCase() + cardData['lastName'][0].toUpperCase(),
        cardData['email'] = Faker.internet.email(),
        cardData['address'] = Faker.address.streetAddress() + ', ' + Faker.address.city() + ', ' + Faker.address.stateAbbr() + ' ' + Faker.address.zipCode(),
        cardData['phone'] = Faker.phone.phoneNumber(),
        cardData['url'] = Faker.internet.url(),
        cardData['company'] = Faker.company.companyName(),
        cardData['phrase'] = Faker.company.catchPhrase(),
        cardData['display'] = true;
        stateList.push(cardData);
    }
    return stateList;
}