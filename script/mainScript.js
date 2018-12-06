var container = document.getElementById('container')

//HEADER

var header = document.createElement('div');
header.setAttribute('class', 'row bg-primary d-flex align-items-center headerHeight');

var headerTitleContainer = document.createElement('div');
headerTitleContainer.setAttribute('class', 'col-4 text-white');

var headerTitle = document.createElement('h1');
headerTitle.textContent = "High on Coding"

var navbar = document.createElement('div');
navbar.setAttribute('class', 'col-4 p-0 text-white')

var navbarTabs = document.createElement('ul');
navbarTabs.setAttribute('class', 'list-inline d-flex justify-content-between align-items-baseline p-0 mb-0 mx-4')

var homeTab = document.createElement('li');
homeTab.setAttribute('class', 'm-0');

var home = document.createElement('h3');
home.textContent = "Home";

var category = document.createElement('li');
category.setAttribute('class','font-weight-light font18');
category.textContent = "Categories"

container.appendChild(header);
header.appendChild(headerTitleContainer);
header.appendChild(navbar);
headerTitleContainer.appendChild(headerTitle);
navbar.appendChild(navbarTabs);
navbarTabs.appendChild(homeTab);
homeTab.appendChild(home);
navbarTabs.appendChild(category);

//Main Info

var mainInfo = document.createElement('div');
mainInfo.setAttribute('class', 'row m-4 bg-lightgray');

var mainInfoContentContainer = document.createElement('div');
mainInfoContentContainer.setAttribute('class', 'col');

var mainInfoTitle = document.createElement('h1');
mainInfoTitle.setAttribute('class', 'font-weight-bold mt-4');
mainInfoTitle.textContent = "Curse of the Current Reviews";

var mainInfoPara = document.createElement('p');
mainInfoPara.setAttribute('class', 'pt-3');
mainInfoPara.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, odit, repudiandae consequatur quod tempore earum iusto sed pariatur nulla, natus voluptates harum fuga! Ab nobis magni voluptatibus repellendus nulla fugit!";


container.appendChild(mainInfo);
mainInfo.appendChild(mainInfoContentContainer);
mainInfoContentContainer.appendChild(mainInfoTitle);
mainInfoContentContainer.appendChild(mainInfoPara);

//Comment Section

//box1
var commentBox1 = document.createElement('div');
commentBox1.setAttribute('class', 'row m-4');

var commentBox1MainContainer = document.createElement('div');
commentBox1MainContainer.setAttribute('class', 'col' );

var commentBox1Title = document.createElement('h4');
commentBox1Title.setAttribute('class', 'text-primary')
commentBox1Title.textContent = "Hello WatchKit"

var commentBox1Text = document.createElement('p');
commentBox1Text.setAttribute('class', 'mb-0')
commentBox1Text.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, odit, repudiandae consequatur quod tempore earum iusto sed pariatur nulla, natus voluptates harum fuga! Ab nobis magni voluptatibus repellendus nulla fugit!"

var commentBox1Bar = document.createElement('div');
commentBox1Bar.setAttribute('class', 'd-flex align-items-center pl-2 font-weight-bold text-white commentHeight bg-orange')

var commentBox1BarList = document.createElement('ul');
commentBox1BarList.setAttribute('class','list-inline d-flex m-0');

var commentBox1BarListComments = document.createElement('li');
commentBox1BarListComments.setAttribute('class', 'mr-5');
commentBox1BarListComments.textContent = "12 comments";

var commentBox1BarListLikes = document.createElement('li');
commentBox1BarListLikes.textContent = "124 likes";

container.appendChild(commentBox1);
commentBox1.appendChild(commentBox1MainContainer);
commentBox1MainContainer.appendChild(commentBox1Title);
commentBox1MainContainer.appendChild(commentBox1Text);
commentBox1MainContainer.appendChild(commentBox1Bar);
commentBox1Bar.appendChild(commentBox1BarList);
commentBox1BarList.appendChild(commentBox1BarListComments)
commentBox1BarList.appendChild(commentBox1BarListLikes)

//box2
var commentBox2 = document.createElement('div');
commentBox2.setAttribute('class', 'row m-4');

var commentBox2MainContainer = document.createElement('div');
commentBox2MainContainer.setAttribute('class', 'col' );

var commentBox2Title = document.createElement('h4');
commentBox2Title.setAttribute('class', 'text-primary')
commentBox2Title.textContent = "Introduction to Swift"

var commentBox2Text = document.createElement('p');
commentBox2Text.setAttribute('class', 'mb-0')
commentBox2Text.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, odit, repudiandae consequatur quod tempore earum iusto sed pariatur nulla, natus voluptates harum fuga! Ab nobis magni voluptatibus repellendus nulla fugit!"

var commentBox2Bar = document.createElement('div');
commentBox2Bar.setAttribute('class', 'd-flex align-items-center pl-2 font-weight-bold text-white commentHeight bg-orange')

var commentBox2BarList = document.createElement('ul');
commentBox2BarList.setAttribute('class','list-inline d-flex m-0');

var commentBox2BarListComments = document.createElement('li');
commentBox2BarListComments.setAttribute('class', 'mr-5');
commentBox2BarListComments.textContent = "15 comments";

var commentBox2BarListLikes = document.createElement('li');
commentBox2BarListLikes.textContent = "45 likes";

container.appendChild(commentBox2);
commentBox2.appendChild(commentBox2MainContainer);
commentBox2MainContainer.appendChild(commentBox2Title);
commentBox2MainContainer.appendChild(commentBox2Text);
commentBox2MainContainer.appendChild(commentBox2Bar);
commentBox2Bar.appendChild(commentBox2BarList);
commentBox2BarList.appendChild(commentBox2BarListComments)
commentBox2BarList.appendChild(commentBox2BarListLikes)





