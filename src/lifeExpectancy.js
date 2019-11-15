export class LifeExpectancy {
    constructor(sex, country) {
        this.sex = sex;
        this.country = country
    }
}

const countries =  ["Japan", "Switzerland", "Singapore", "Australia", "Spain", "Iceland", "Italy", "Israel", "Sweden", "France", "South_Korea", "Canada", "Luxembourg", "Netherlands", "Norway", "Malta", "New_Zealand", "Austria", "Ireland", "United_Kingdom", "Belgium", "Finland", "Portugal", "Germany", "Greece", "Slovenia", "Denmark", "Cyprus", "Chile", "Costa_Rica", "Qatar", "Cuba", "Czech_Republic", "Maldives", "Panama", "Croatia", "Albania", "United_States", "Brunei", "Estonia", "Poland", "Bosnia_and_Herzegovina", "United_Arab_Emirates", "Uruguay", "Bahrain", "Mexico", "Slovakia", "Oman", "Antigua_and_Barbuda", "Argentina", "Jamaica", "Ecuador", "China", "Montenegro", "Bahamas", "Vietnam", "Hungary", "Turkey", "North_Macedonia", "Algeria", "Serbia", "Iran", "Peru", "Barbados", "Tunisia", "Saint_Lucia", "Malaysia", "Romania", "Brazil", "Lebanon", "Thailand", "Sri_Lanka", "Armenia", "Nicaragua", "Colombia", "Kuwait", "Honduras", "Mauritius", "Latvia", "Saudi_Arabia", "Bulgaria", "Georgia", "Morocco", "Jordan", "Venezuela", "Paraguay", "Samoa", "Dominican_Republic", "Grenada", "Lithuania", "Tonga", "El_Salvador", "Cape_Verde", "Saint_Vincent_and_the_Grenadines", "Seychelles", "Libya", "Azerbaijan", "Belarus", "Moldova", "Vanuatu", "Guatemala", "Bangladesh", "Suriname", "Ukraine", "Trinidad_and_Tobago", "Kyrgyzstan", "Egypt", "Bolivia", "North_Korea", "Russia", "Kazakhstan", "Belize", "Fiji", "Bhutan", "Tajikistan", "Micronesia", "Uzbekistan", "Solomon_Islands", "Nepal", "Indonesia", "Iraq", "Mongolia", "Cambodia", "Philippines", "India", "Timor-Leste", "Sao_Tome_and_Principe", "Senegal", "Myanmar", "Pakistan", "Kiribati", "Turkmenistan", "Guyana", "Rwanda", "Gabon", "Namibia", "Yemen", "Laos", "Botswana", "Madagascar", "Ethiopia", "Congo", "Eritrea", "Syria", "Sudan", "Comoros", "Djibouti", "Haiti", "Kenya", "Mauritania", "Papua_New_Guinea", "South_Africa", "Ghana", "Uganda", "Niger", "Tanzania", "Zambia", "Liberia", "Gambia", "Zimbabwe", "Afghanistan", "Benin", "Burkina_Faso", "Togo", "DR_Congo", "Burundi", "Guinea", "Guinea-Bissau", "Eswatini_(Swaziland)", "Malawi", "Mali", "Equatorial_Guinea", "Mozambique", "South_Sudan", "Cameroon", "Somalia", "Nigeria", "Lesotho", "Cote_d'Ivoire", "Chad", "Central_African_Republic", "Angola", "Sierra_Leone"];

const femaleExpectancies =  ["86.8", "85.3", "86.1", "84.8", "85.5", "84.1", "84.8", "84.3", "84.0", "85.4", "85.5", "84.1", "84.0", "83.6", "83.7", "83.7", "83.3", "83.9", "83.4", "83.0", "83.5", "83.8", "83.9", "83.4", "83.6", "83.7", "82.5", "82.7", "83.4", "82.2", "81.6", "81.4", "81.7", "80.2", "80.0", "81.2", "80.7", "81.1", "79.2", "82.0", "81.3", "79.7", "78.6", "80.4", "77.9", "79.5", "80.2", "79.2", "78.6", "79.9", "78.6", "79.0", "77.6", "78.1", "79.1", "80.7", "79.1", "78.9", "77.8", "77.5", "78.4", "76.6", "78.0", "77.9", "77.8", "77.9", "77.3", "78.8", "78.7", "76.5", "78.0", "78.3", "77.7", "77.9", "78.4", "76.0", "77.0", "77.8", "79.2", "76.0", "78.0", "78.3", "75.4", "75.9", "78.5", "76.0", "77.5", "77.1", "76.1", "79.1", "76.4", "77.9", "75.0", "75.2", "78.0", "75.6", "75.8", "78.0", "76.2", "74.0", "75.2", "73.1", "74.7", "76.1", "74.8", "75.1", "73.2", "73.3", "74.0", "76.3", "74.7", "73.1", "73.1", "70.1", "73.6", "70.6", "72.7", "70.8", "70.8", "71.2", "71.8", "73.2", "70.7", "72.0", "69.9", "70.1", "69.4", "68.6", "68.5", "67.5", "68.8", "70.5", "68.5", "71.1", "67.2", "68.3", "67.2", "67.2", "68.1", "67.0", "66.8", "66.3", "67.0", "69.9", "65.9", "65.2", "65.3", "65.5", "65.8", "64.6", "65.4", "66.2", "63.9", "64.3", "62.8", "63.8", "64.7", "62.9", "62.5", "62.3", "61.9", "61.1", "60.5", "61.1", "61.5", "61.6", "59.8", "60.5", "61.1", "59.9", "58.3", "60.0", "59.4", "58.6", "58.6", "56.6", "55.6", "55.4", "54.4", "54.5", "54.1", "54.0", "50.8"];

const maleExpectancies =  ["80.5", "81.3", "80.0", "80.9", "80.1", "81.2", "80.5", "80.6", "80.7", "79.4", "78.8", "80.2", "79.8", "80.0", "79.8", "79.7", "80.0", "79.0", "79.4", "79.4", "78.6", "78.3", "78.2", "78.7", "78.3", "77.9", "78.6", "78.3", "77.4", "77.1", "76.9", "76.9", "75.9", "76.9", "77.4", "74.7", "75.1", "74.7", "76.3", "72.7", "73.6", "75.0", "76.4", "73.3", "76.2", "73.9", "72.9", "75.0", "74.1", "72.7", "73.9", "73.5", "74.6", "74.1", "72.9", "71.3", "72.3", "72.6", "73.5", "73.8", "72.9", "74.5", "73.1", "73.1", "73.0", "72.6", "72.7", "71.4", "71.4", "73.5", "71.9", "71.6", "71.6", "71.5", "71.2", "73.7", "72.3", "71.4", "69.6", "73.2", "71.1", "70.3", "73.3", "72.5", "70.0", "72.2", "70.9", "70.9", "71.2", "68.1", "70.6", "68.8", "71.3", "71.3", "69.1", "70.1", "69.6", "66.5", "67.9", "70.1", "68.5", "70.6", "68.6", "66.3", "67.9", "67.2", "68.8", "68.2", "67.0", "64.7", "65.7", "67.5", "67.0", "69.5", "66.6", "68.1", "66.1", "67.9", "67.7", "67.1", "66.2", "64.7", "66.6", "65.3", "66.9", "66.6", "65.6", "64.6", "64.6", "65.5", "63.7", "62.2", "63.9", "60.9", "64.7", "63.1", "64.3", "64.1", "63.3", "63.9", "62.8", "63.2", "62.4", "59.9", "62.4", "61.9", "61.8", "61.5", "61.1", "61.6", "60.6", "59.3", "61.0", "60.3", "60.9", "59.9", "59.0", "59.8", "59.8", "59.0", "59.3", "58.8", "59.1", "58.6", "58.3", "57.7", "58.2", "57.2", "56.6", "56.7", "58.2", "56.6", "55.7", "56.1", "55.9", "53.5", "53.4", "51.7", "52.3", "51.7", "50.9", "50.9", "49.3"];

