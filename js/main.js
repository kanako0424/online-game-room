// js for moving page
const h3 = $('.page-title').text();
$('nav li').on('click',function(){
  $('nav li').removeClass('highlight');
  $(this).addClass('highlight');
  
  const className = $(this).attr('class');
  $('section').addClass('display');
  
  if ( className == 'can-join-room highlight') {
    $('.page-title').empty();
    $('.page-title').append('参加できるルーム');
    $('#can-join-room').removeClass('display');
  } else if ( className == 'dm highlight') {
    $('.page-title').empty();
    $('.page-title').append('ダイレクトメッセージ');
    $('#dm').removeClass('display');
  } else if ( className == 'bell highlight' ) {
    $('.page-title').empty();
    $('.page-title').append('通知');
    $('#bell').removeClass('display');
  } else if ( className == 'create-room highlight' ) {
    $('.page-title').empty();
    $('.page-title').append('ルームの作成');
    $('#create-room').removeClass('display');
  } else if ( className == 'created-room highlight' ) {
    $('.page-title').empty();
    $('.page-title').append('作成したルーム');
    $('#created-room').removeClass('display');
  } else if ( className == 'joined-room highlight' ) {
    $('.page-title').empty();
    $('.page-title').append('参加するルーム');
    $('#joined-room').removeClass('display');
  } 
});


$('button').on('click', function(){
  const className = $(this).attr('class');
  
  if ( className == 'profile') {
    $('html').toggleClass('scroll-prevent');
    $('#profile').toggleClass('display');
    $('.page-title').empty();
    $('.page-title').append(h3);
    $('#profile').removeClass('slideInRight');
    $('#profile').toggleClass('slideInRight');
    $('.setting, .inquire, .logout').removeClass('display');
    $('#setting, #inquire, #logout').addClass('display');
  } else if (className == 'filter') {
    $('html').toggleClass('scroll-prevent');
    $('#filter').toggleClass('display');
    $('.page-title').empty();
    $('.page-title').append(h3);
    $('#filter').removeClass('slideInLeft');
    $('#filter').toggleClass('slideInLeft');
  } 
});

$('a.profile').on('click', function() {
  $('.page-title').empty();
  $('.page-title').append(h3);
  $('.setting, .inquire, .logout').removeClass('display');
  $('#setting, #inquire, #logout').addClass('display');
});

$('.icon').on('click', function() {
  $('html').toggleClass('scroll-prevent');
  $('#user-page').toggleClass('display');
  $('#user-page').removeClass('slideInLeft');
  $('#user-page').toggleClass('slideInLeft');
});

$('a.user-page-times').on('click', function() {
  $('html').toggleClass('scroll-prevent');
  $('#user-page').toggleClass('display');
});

$('#profile li').on('click', function() {
  const className = $(this).attr('class');
  $('#profile').removeClass('display');
  $('.setting, .inquire, .logout').addClass('display');
  
  if (className == 'setting') {
    $('#setting').removeClass('display');
  } else if (className == 'inquire') {
    $('#inquire').removeClass('display');
  } else if (className == 'logout') {
    $('#logout').removeClass('display');
  }
});