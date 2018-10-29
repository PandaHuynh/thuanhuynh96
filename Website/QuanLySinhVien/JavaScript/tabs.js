//Tab
    $(document).ready(function() {    
        vert_tabs();
        });
        
        $(window).resize(function(){
            if($('.vertical-tabs').innerWidth() > 608) {
                if($('div.selected').length){
                }else{
                    $('div.box:first').addClass('selected');    
                }
            }
        });

    function vert_tabs(){
        $('ul.checklist-select li').click(function() {
            var selectID = $(this).attr('id');
            $('ul.checklist-select li').removeClass('active');
            $(this).addClass('active');
            $('div.box').removeClass('selected');
            $('.' + selectID + '-box').addClass('selected');
        });    
    }




// //Modal Them
//     function Notify(text, callback, close_callback, style) {

//         var time = '10000';
//         var $container = $('#notifications');
//       var icon = '<i class="fa fa-info-circle "></i>';
      
//       if( style == 'primary'){
//           icon = '<i class="fa fa-bookmark "></i>';
//       }
      
//       if( style == 'success'){
//           icon = '<i class="fa fa-check-circle "></i>';
//       }
      
//       if( style == 'warning'){
//           icon = '<i class="fa fa-exclamation-circle "></i>';
//       }
      
//       if( style == 'danger'){
//           icon = '<i class="fa fa-exclamation-triangle "></i>';
//       }
      
//         if (typeof style == 'undefined' ) style = 'warning'
      
//           var html = $('<div class="alert alert-' + style + '  hide">' + icon +  " " + text + '</div>');
      
      
//       console.log(text)
      
//         $('<a>',{
//             text: '×',
//             class: 'button close',
//             style: 'padding-left: 10px;',
//             href: 'javascript:void(0)',
//             click: function(e){
//                 e.preventDefault()
//                 close_callback && close_callback()
//                 remove_notice()
//             }
//         }).prependTo(html)

//         $container.prepend(html)
//         html.removeClass('hide').hide().fadeIn('slow')

//         function remove_notice() {
//             html.stop().fadeOut('slow').remove()
//         }
        
//         var timer =  setInterval(remove_notice, time);
      
//         $(html).hover(function(){
//             clearInterval(timer);
//         }, function(){
//             timer = setInterval(remove_notice, time);
//         });
        
//         html.on('click', function () {
//             clearInterval(timer)
//             callback && callback()
//             remove_notice()
//         });
      
      
//     };

//     $('.success').on('click', function () {
//       Notify("Thêm sinh viên thành công!",null,null,'success');
//     });
//     $('.warning').on('click', function () {
//       Notify("Memory Almost Full! ",null,null,'warning');              
//     });
//     $('.danger').on('click', function () {
//       Notify("Oh no! There's a virus!",null,null,'danger');            
//     });
