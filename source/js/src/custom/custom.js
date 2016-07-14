/**
 * Custom js
 * Created by sudoz on 7/14/16.
 */
$(document).ready(function () {
  // 顶部阅读进度条
  $(window).scroll(function () {
    $(".top-scroll-bar").attr("style", "width:" + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%; display: block;");
  });
  // 页面加载进度条
  NProgress.start();
  window.onload = function () {
    NProgress.done();
  };

  // $(document).on('page:fetch',   function() { NProgress.start(); });
  // $(document).on('page:change',  function() { NProgress.done(); });
  // $(document).on('page:restore', function() { NProgress.remove(); });
});
