const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);


const item1 = document.createElement('div');
item1.classList.add('item');


const item1Img = document.createElement('img');
item1Img.classList.add('item-img');
item1Img.src = './img/photo_1.png';
item1Img.alt = '';
item1.append(item1Img);

const item1DescribeBlock = document.createElement('div');
item1DescribeBlock.classList.add('describe-block');
item1.append(item1DescribeBlock);

const item1Span = document.createElement('span');
item1Span.textContent = 'STRIPE для SAAS';
item1DescribeBlock.append(item1Span);

const item1P = document.createElement('p');
item1P.textContent = 'Принимайте платежи за ваш продукт "Программное обеспечение как услуга" с помощью Stripe';
item1DescribeBlock.append(item1P);

const item1Row = document.createElement('div');
item1Row.classList.add('row');
item1DescribeBlock.append(item1Row);


const button_one_one = document.createElement('button');
const button_one_two = document.createElement('button');
const button_one_three = document.createElement('button');
button_one_one.textContent = "#stripe";
button_one_one.classList.add('one_one')
button_one_two.textContent = "#pro";
button_one_two.classList.add('one_two')
button_one_three.textContent = "#машинопись";
button_one_three.classList.add('one_three')
item1Row.append(button_one_one, button_one_two, button_one_three);



const item2 = document.createElement('div');
item2.classList.add('item');
container.append(item2);

const item2Img = document.createElement('img');
item2Img.classList.add('item-img');
item2Img.src = './img/photo_2.png';
item2Img.alt = '';
item2.append(item2Img);

const item2DescribeBlock = document.createElement('div');
item2DescribeBlock.classList.add('describe-block');
item2.append(item2DescribeBlock);

const item2Span = document.createElement('span');
item2Span.textContent = 'NEXT.JS Полный Курс';
item2DescribeBlock.append(item2Span);

const item2P = document.createElement('p');
item2P.textContent = 'Освоите основы работы с Next.js 14 и маршрутизатором приложений';
item2DescribeBlock.append(item2P);

const item2Row = document.createElement('div');
item2Row.classList.add('row');
item2DescribeBlock.append(item2Row);


const button_two_one = document.createElement('button');
const button_two_two = document.createElement('button');
const button_two_three = document.createElement('button');
const button_two_four = document.createElement('button');
button_two_one.textContent = "#react";
button_two_one.classList.add('two_one')
button_two_two.textContent = "#nextjs";
button_two_two.classList.add('two_two')
button_two_three.textContent = "#postgres";
button_two_three.classList.add('two_three')
button_two_four.textContent = "#pro"
button_two_four.classList.add('two_four')
item2Row.append(button_two_one, button_two_two, button_two_three , button_two_four);


const item3 = document.createElement('div');
item3.classList.add('item');


const item3Img = document.createElement('img');
item3Img.classList.add('item-img');
item3Img.src = './img/photo_3.png';
item3Img.alt = '';
item3.append(item3Img);

const item3DescribeBlock = document.createElement('div');
item3DescribeBlock.classList.add('describe-block');
item3.append(item3DescribeBlock);

const item3Span = document.createElement('span');
item3Span.textContent = 'Полный Курс SVELTEKIT';
item3DescribeBlock.append(item3Span);

const item3P = document.createElement('p');
item3P.textContent = 'Узнайте,как создавать потрясающие полнофункционаьные приложения с помощью SvelteKit';
item3DescribeBlock.append(item3P);

const item3Row = document.createElement('div');
item3Row.classList.add('row');
item3DescribeBlock.append(item3Row);


const button_three_one = document.createElement('button');
const button_three_two = document.createElement('button');
const button_three_three = document.createElement('button');
button_three_one.textContent = "#стройность";
button_three_one.classList.add('three_one')
button_three_two.textContent = "#firebase";
button_three_two.classList.add('three_two')
button_three_three.textContent = "#pro";
button_three_three.classList.add('three_three')
item3Row.append(button_three_one, button_three_two, button_three_three);


const item4 = document.createElement('div');
item4.classList.add('item4');


const item4Img = document.createElement('img');
item4Img.classList.add('item-img');
item4Img.src = './img/photo_4.png';
item4Img.alt = '';
item4.append(item4Img);

const item4DescribeBlock = document.createElement('div');
item4DescribeBlock.classList.add('describe-block');
item4.append(item4DescribeBlock);

const item4Span = document.createElement('span');
item4Span.textContent = 'Полный курс REACT SUPABASE';
item4DescribeBlock.append(item4Span);

const item4P = document.createElement('p');
item4P.textContent = 'Создайте и разверните веб-приложение с полный стеком, готовое к производству, с Supabase,React и Postgres';
item4DescribeBlock.append(item4P);

const item4Row = document.createElement('div');
item4Row.classList.add('row');
item4DescribeBlock.append(item4Row);


const button_four_one = document.createElement('button');
const button_four_two = document.createElement('button');
const button_four_three = document.createElement('button');
button_four_one.textContent = "#react";
button_four_one.classList.add('three_one')
button_four_two.textContent = "#supabase";
button_four_two.classList.add('three_two')
button_four_three.textContent = "#pro";
button_four_three.classList.add('three_three')
item4Row.append(button_four_one, button_four_two, button_four_three);

container.append(item1 , item2 , item3 , item4);