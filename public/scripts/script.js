$(document).ready(function() {
    // Toggle do menu móvel e do overlay
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active'); // Abre/fecha o menu
        $(this).find('i').toggleClass('fa-bars fa-x'); // Troca o ícone do hambúrguer
        $('#overlay').toggle(); // Mostra ou esconde o overlay
        
    });

    // Fechar o menu e o overlay quando clicar no botão "X" de fechar
    $('#close_mobile_menu').on('click', function () {
        $('#mobile_menu').removeClass('active'); // Fecha o menu
        $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars'); // Restaura o ícone do hambúrguer
        $('#overlay').hide(); // Esconde o overlay
    });

    // Fechar o menu e o overlay ao clicar em um item do menu móvel
    $('#mobile_nav_list a').on('click', function () {
        $('#mobile_menu').removeClass('active'); // Fecha o menu
        $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars'); // Restaura o ícone do hambúrguer
        $('#overlay').hide(); // Esconde o overlay
    });

    // Fechar o menu e o overlay se clicar fora do menu ou do botão
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#mobile_menu').length && !$(event.target).closest('#mobile_btn').length) {
            $('#mobile_menu').removeClass('active'); // Fecha o menu
            $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars'); // Restaura o ícone do hambúrguer
            $('#overlay').hide(); // Esconde o overlay
        }
    });
});


$(document).ready(function() {
    
    const sections = $('section');
    const navItems = $('.nav-item');
    
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();
    
        let activeSectionIndex = 0;
    
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
    
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
    
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
    
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    
    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    
    ScrollReveal().reveal('', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })
    
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
    });