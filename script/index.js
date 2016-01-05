$(document).ready(function() {
    $('.section-title,.line-section,.section-contenue,.section-thumb,#title,.title-section2,.exp-title,.line-section2,.aboutme-section2,.title-work,.border-works,.first-title,.sujet-work,.img-thumb,.title-date,.msg-title').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
});