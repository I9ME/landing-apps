/*=========================================================================================
// INICIO MAIN JS
========================================================================================= */
jQuery(function($) {
  $(document).ready(function() {

    // Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
    (function() {

      var formulario = document.formulario_registro,
          elementos = formulario.elements;

      // Funcion que se ejecuta cuando el evento click es activado

      var validarInputs = function() {
        for (var i = 0; i < elementos.length; i++) {
          // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
          if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "text2") {
            // Si es tipo texto, email o password vamos a comprobar que esten completados los input
            if (elementos[i].value.length == 0) {
              console.log('El campo ' + elementos[i].name + ' esta incompleto');
              elementos[i].className = elementos[i].className + " error";
              return false;
            } else {
              elementos[i].className = elementos[i].className.replace(" error", "");
            }
          }
        }

        return true;
      };

      var enviar = function(e) {
        return true;
        
        if (!validarInputs()) {
          console.log('Falto validar los Input');
          e.preventDefault();
        } else if (!validarRadios()) {
          //console.log('Falto validar los Radio Button');
          //e.preventDefault();
          return
        } else {
          //console.log('Envia');
          //e.preventDefault();
        }
      };

      var focusInput = function() {
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
      };

      var blurInput = function() {
        if (this.value <= 0) {
          this.parentElement.children[1].className = "label";
          this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
      };

      // --- Eventos ---
      formulario.addEventListener("submit", enviar);

      for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "text2") {
          elementos[i].addEventListener("focus", focusInput);
          elementos[i].addEventListener("blur", blurInput);
        }
      }
    }())


    //menu scroll
    $(window).scroll(function() {
      
      var scroll = jQuery(window).scrollTop();

      if ( scroll > 0 ) {
        jQuery('.header').addClass('scrollOn');
        jQuery('.header').removeClass('scrollOff');

      } else {
        jQuery('.header').removeClass('scrollOn');
        jQuery('.header').addClass('scrollOff');
      }

    });

    //menu-toggle
    $(".header__toggle").click(function(event){
      event.preventDefault();

      if ($(this).hasClass('on')){

        $(this).removeClass('on');
        $(".menu").stop().fadeOut();

      }else{

        $(this).addClass('on');
        $(".menu").stop().fadeIn();

      }

    });
      
      
    $(".menu__item a").click(function(event){        
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top - 25}, 1000);
  
       varHash = $(this).attr('href');   
      window.location.hash = varHash;
      
     });
      





       var larguraTela = $(window).width();

      if( larguraTela < 768){
         
         
          $("#services").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            navText: false,
            margin: 0,
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn'
           
          });
       } else{
          
       }
      
    









      $("#facilidades").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn'
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3

        },
        1000: {
          items: 4,
          dots: false
        }
      }
    });

    $("#carousel-banner").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      loop: true,
      autoplay:true,
      autoplayTimeout:5600,
      autoplayHoverPause:true,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn'
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    });

    $("#portfolio-carousel").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn'
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3,
          nav: false,
          dots: false
        },
        1000: {
          items: 3,
          nav: false,
          dots: false
        }
      }
    });

    $("#carousel-sobre-contabilizar").owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      navText: false,
      margin: 0,
      //animateIn: 'slideInRight',
      smartSpeed:450,
      loop: true,
      autoplay:true,
      //autoplayTimeout:3900,
      autoplayHoverPause:true,      
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1,
          dots: false,
          
        }
      }
    });
    $("#quem-somos").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5600,
      autoplayHoverPause: true,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn'
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true,
          dots: false
        }
      }
    });

  });
});

/*
  Masked Input plugin for jQuery
  Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
  Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
  Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);