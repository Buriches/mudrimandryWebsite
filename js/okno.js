jQuery(document).ready(($)=> {
    $('.googlemap').slideUp(0)
    $('.okno').slideUp(0)




    $('.okno__title').click(
        function oknoshow(event){

            let target = event.target;
            if (target.tagName == 'svg' || target.tagName == 'path') {

            }else {
                $('.okno__content').slideDown(500)
            }

        }
    );
    $('.okno__close').click(
        function oknoclose() {
            $('.map__item').removeClass('map__activate')
            if (screen.width <= 500){
                $('.okno').slideUp(500)
            }else {
                $('.okno__content').slideUp(500)
            }
            $('.map__item').css({transform: 'scale(1)'})
        }
    );
    $('.map__item').onmouseover = function (){
        $(this).css({transform: 'scale(1.2)'})
    }
    $('.map__item').click(function (event){
        if ($(this).hasClass('map__activate')){
            $('.okno').delay(100).slideDown(500)
            $('.okno__content').delay(100).slideDown(500)
        }else{
        var region;
        var type;
        var zapros;
        var zaprosMap;
        var zaprosURL;
        var zaprosFinal;
        var zaprosFinalURL;
        var zaprosMapFinal;
        $('.map__item').removeClass('map__activate')
        var clicked__class = event.target.className;

        if ($(this).hasClass('herson')){
            region = 'herson';
        }else
        if ($(this).hasClass('nicolaew')){
            region = 'nicolaew';
        }else
        if ($(this).hasClass('cherkasi')){
            region = 'cherkasi';
        }else
        if ($(this).hasClass('uzgorod')){
            region = 'uzgorod';
        }else
        if ($(this).hasClass('zitomir')){
            region = 'zitomir';
        }else
            if ($(this).hasClass('chernigow1')){
            region = 'chernigow1';
        }else
        if ($(this).hasClass('lwow')){
            region = 'lwow';
        }else
        if ($(this).hasClass('zaporiza')){
            region = 'zaporiza';
        }else
        if ($(this).hasClass('dnepr')){
            region = 'dnepr';
        }else
        if ($(this).hasClass('poltawa')){
            region = 'poltawa';
        }else
        if ($(this).hasClass('sumi')){
            region = 'sumi';
        }else
        if ($(this).hasClass('chernigow2')){
            region = 'chernigow2';
        }else{
            alert('wrong class')
        }

        if ($(this).hasClass('otel')){
            type = 'otel';
        }else
        if ($(this).hasClass('camp')){
            type = 'camp';
        }else
        if ($(this).hasClass('pohod')){
            type = 'pohod';
        }else{
            alert('wrong type')
        }
        zapros = region + type
        zaprosURL = zapros + 'URL'
        zaprosMap = zapros + 'Map'
        zaprosFinal = info[zapros]
        zaprosFinalURL = info[zaprosURL]
        $('.okno__name').html(zaprosFinal);
        $(".opensite").attr("href",zaprosFinalURL);
        $('.googlemap').slideUp(0)
        $('.okno__content').html(info[zaprosMap])
        $(this).addClass('map__activate')






        $('.okno').delay(100).slideDown(500)
        $('.okno__content').delay(100).slideDown(500)
        }
    })


});
var info = {
    //herson
    hersonotel: 'База отдыха «Sapfir»',
    hersoncamp: 'Площадка для кемпинга «Кристал»',
    hersonpohod: 'Актовский каньон',
    hersonotelURL: 'https://www.google.com/maps/place/%D0%91%D0%B0%D0%B7%D0%B0+%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0+%22%D0%A1%D0%B0%D0%BF%D1%84%D0%B8%D1%80%22/@48.9392921,37.7407639,17z/data=!4m12!1m6!3m5!1s0x40df87e244fe1d4b:0xbcc52216745cc906!2z0JHQsNC30LAg0L7RgtC00YvRhdCwICLQodCw0L_RhNC40YAi!8m2!3d48.9392921!4d37.7429526!3m4!1s0x40df87e244fe1d4b:0xbcc52216745cc906!8m2!3d48.9392921!4d37.7429526',
    hersoncampURL: 'https://www.google.com/maps/place/%22Krystal%22+Kempinh/@46.6128716,32.6024508,14.08z/data=!4m9!1m2!2m1!1z0LrQtdC80L_QuNC90LMgwqvQmtGA0LjRgdGC0LDQu8K7!3m5!1s0x40c405543fd86873:0xfc08c67a1f22b123!8m2!3d46.6140678!4d32.6146856!15sCiHQutC10LzQv9C40L3QsyDCq9Ca0YDQuNGB0YLQsNC7wruSAQdsb2RnaW5n',
    hersonpohodURL: 'https://www.google.com/maps/place/%D0%90%D0%BA%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D0%B0%D0%BD%D1%8C%D0%BE%D0%BD/@47.7131761,31.4637994,17z/data=!3m1!4b1!4m5!3m4!1s0x40cf9a0fa154813b:0xebceffe8fa27804!8m2!3d47.7131761!4d31.4659881',
    hersonotelMap: '<iframe class="googlemap hersonotel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12466.64760523325!2d37.740072892170744!3d48.93844494382366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df87e244fe1d4b%3A0xbcc52216745cc906!2z0JHQsNC30LAg0L7RgtC00YvRhdCwICLQodCw0L_RhNC40YAi!5e0!3m2!1sru!2sua!4v1639512136821!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    hersoncampMap:'<iframe class="googlemap hersoncamp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21925.62420642652!2d32.6024508!3d46.6128716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c405543fd86873%3A0xfc08c67a1f22b123!2s%22Krystal%22%20Kempinh!5e0!3m2!1sru!2sua!4v1639513152684!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    hersonpohodMap:'<iframe class="googlemap hersonpohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12769.374241592639!2d31.460322995170543!3d47.71489789095732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cf9a0fa154813b%3A0xebceffe8fa27804!2z0JDQutGC0L7QstGB0LrQuNC5INC60LDQvdGM0L7QvQ!5e0!3m2!1sru!2sua!4v1639513198429!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //nicolaew
    nicolaewotel: '«Steller Hostel & Camping»',
    nicolaewcamp: 'Остров Березань',
    nicolaewpohod: 'Триктартский лес',
    nicolaewotelURL: 'https://www.google.com/maps/place/%22%D0%A1%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%22+-+%D0%A5%D0%BE%D1%81%D1%82%D0%B5%D0%BB+%D0%B8+%D0%9A%D0%B5%D0%BC%D0%BF%D0%B8%D0%BD%D0%B3/@46.4464913,30.7687615,17z/data=!4m18!1m9!3m8!1s0x40c6331d49656705:0x360af5013f750c47!2zItCh0YLQtdC70LvQtdGAIiAtINCl0L7RgdGC0LXQuyDQuCDQmtC10LzQv9C40L3Qsw!5m2!4m1!1i2!8m2!3d46.4464913!4d30.7709502!3m7!1s0x40c6331d49656705:0x360af5013f750c47!5m2!4m1!1i2!8m2!3d46.4464913!4d30.7709502',
    nicolaewcampURL: 'https://www.google.com/maps/place/%D0%91%D0%B5%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D1%8C/@46.5982715,31.4063983,16z/data=!4m13!1m7!3m6!1s0x40c66606d8b6963f:0x3b3cae2e2b9bdf34!2z0JHQtdGA0LXQt9Cw0L3RjA!3b1!8m2!3d46.5995743!4d31.4116446!3m4!1s0x40c66606d8b6963f:0x3b3cae2e2b9bdf34!8m2!3d46.5995743!4d31.4116446',
    nicolaewpohodURL: 'https://www.google.com/maps/place/%D0%A2%D1%80%D0%B8%D0%BA%D1%80%D0%B0%D1%82%D1%8B,+%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+56535/@47.7060678,31.4085205,15.52z/data=!4m9!1m2!2m1!1z0KLRgNC40LrRgtCw0YDRgtGB0LrQuNC5INC70LXRgQ!3m5!1s0x40cf99e7f5531151:0x13994bbfae0871b2!8m2!3d47.7159812!4d31.4062735!15sCh3QotGA0LjQutGA0LDRgtGB0LrQuNC5INC70LXRgZIBCGxvY2FsaXR5',
    nicolaewotelMap:'<iframe class="googlemap nicolaewotel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4623.360883608746!2d30.770204002353108!3d46.447372854639646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6331d49656705%3A0x360af5013f750c47!2zItCh0YLQtdC70LvQtdGAIiAtINCl0L7RgdGC0LXQuyDQuCDQmtC10LzQv9C40L3Qsw!5e0!3m2!1sru!2sua!4v1639513345585!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    nicolaewcampMap:'<iframe class="googlemap nicolaewcamp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26080.407346697153!2d31.40069383370387!3d46.59978668981595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c66606d8b6963f%3A0x3b3cae2e2b9bdf34!2z0JHQtdGA0LXQt9Cw0L3RjA!5e0!3m2!1sru!2sua!4v1639513400628!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    nicolaewpohodMap:'<iframe class="googlemap nicolaewpohod" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18060.749955490275!2d31.40540917342657!3d47.708758083116734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cf99e7f5531151%3A0x13994bbfae0871b2!2z0KLRgNC40LrRgNCw0YLRiywg0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA1NjUzNQ!5e0!3m2!1sru!2sua!4v1639513446596!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //cherkasi
    cherkasiotel: '«Mini-hotel»',
    cherkasicamp: 'Лес возле села Мигия',
    cherkasipohod: 'Букинский каньон',
    cherkasiotelURL: 'https://www.google.com/maps/place/%D0%9C%D1%96%D0%BD%D1%96+%D0%93%D0%BE%D1%82%D0%B5%D0%BB%D1%8C/@49.4153854,32.0045902,13z/data=!4m9!1m2!2m1!1zTWluaS1ob3RlbCDQp9C10YDQutCw0YHRiw!3m5!1s0x40d14bdd9a9e0875:0x86316d83ac6743f8!8m2!3d49.4129993!4d32.0341189!15sChlNaW5pLWhvdGVsINCn0LXRgNC60LDRgdGLkgEFaG90ZWw',
    cherkasicampURL: 'https://www.google.com/maps/place/%D0%9C%D0%B8%D0%B3%D0%B8%D1%8F,+%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+55223/@48.0379736,30.9345757,14z/data=!4m5!3m4!1s0x40ce4a04d5b0e609:0x373ac691846a46f5!8m2!3d48.0398428!4d30.9521026',
    cherkasipohodURL: 'https://www.google.com/maps/place/%D0%91%D1%83%D1%86%D1%8C%D0%BA%D0%B8%D0%B9+%D0%9A%D0%B0%D0%BD%D1%8C%D0%B9%D0%BE%D0%BD/@49.0910804,30.3956177,17z/data=!3m1!4b1!4m8!3m7!1s0x40d248b25f5d8433:0x29bd77f881a1fee2!5m2!4m1!1i2!8m2!3d49.0910804!4d30.3978064',
    cherkasiotelMap:'<iframe class="googlemap cherkasiotel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41539.40034455602!2d32.02484624248047!3d49.40488656459429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14bdd9a9e0875%3A0x86316d83ac6743f8!2z0JzRltC90ZYg0JPQvtGC0LXQu9GM!5e0!3m2!1sru!2sua!4v1639513662013!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    cherkasicampMap:'<iframe class="googlemap cherkasicamp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21341.950887594132!2d30.9345757!3d48.0379736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ce4a04d5b0e609%3A0x373ac691846a46f5!2z0JzQuNCz0LjRjywg0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA1NTIyMw!5e0!3m2!1sru!2sua!4v1639513708021!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    cherkasipohodMap:'<iframe class="googlemap cherkasipohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.0154524383743!2d30.396088052107125!3d49.09100163958167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d248b25f5d8433%3A0x29bd77f881a1fee2!2z0JHRg9GG0YzQutC40Lkg0JrQsNC90YzQudC-0L0!5e0!3m2!1sru!2sua!4v1639513741145!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //uzgorod
    uzgorodotel: '«Урочище Rafnivskyi»',
    uzgorodcamp: '«Петрос»',
    uzgorodpohod: 'Озеро «Маричейка»',
    uzgorodotelURL: 'https://www.google.com/maps/search/%C2%AB%D0%A3%D1%80%D0%BE%D1%87%D0%B8%D1%89%D0%B5+Rafnivskyi%C2%BB/@48.9181763,22.7299571,17z/data=!3m1!4b1',
    uzgorodcampURL: 'https://www.google.com/maps/place/%D0%B3%D0%BE%D1%80%D0%B0+%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81/@48.1718706,24.4123433,15z/data=!3m1!4b1!4m5!3m4!1s0x473702eac2997233:0xd825676704f61385!8m2!3d48.1718715!4d24.4210981',
    uzgorodpohodURL: 'https://www.google.com/maps/place/%D0%BE%D0%B7.+%D0%9C%D0%B0%D1%80%D0%B8%D1%87%D0%B5%D0%B9%D0%BA%D0%B0/@48.0347346,24.6561459,17z/data=!3m1!4b1!4m5!3m4!1s0x4736f71f7751f659:0x9ebb2bf4cd94061a!8m2!3d48.0346669!4d24.6583327',
    uzgorodotelMap:'<iframe class="googlemap uzgorodotel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2621.8655912950853!2d22.7323688!3d48.917953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47397bdba52e7ebd%3A0x81031c984b63fdbb!2z0KPRgNC-0YfQuNGJ0LUg0KDQsNGE0L3RltCy0YHRjNC60LjQuQ!5e0!3m2!1sru!2sua!4v1639513830031!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    uzgorodcampMap:'<iframe class="googlemap uzgorodcamp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60213.1489157257!2d24.382094540107865!3d48.16672500205246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473702eac2997233%3A0xd825676704f61385!2z0LPQvtGA0LAg0J_QtdGC0YDQvtGB!5e0!3m2!1sru!2sua!4v1639513865574!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    uzgorodpohodMap:'<iframe class="googlemap uzgorodpohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10671.388575564133!2d24.653829455993854!3d48.03597892356879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736f71f7751f659%3A0x9ebb2bf4cd94061a!2z0L7Qty4g0JzQsNGA0LjRh9C10LnQutCw!5e0!3m2!1sru!2sua!4v1639513900013!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //zitomir
    zitomirotel: 'Отель «Чудодиево»',
    zitomircamp: 'Карьер «Высокий камень»',
    zitomirpohod: 'Гранитный каньон',
    zitomirotelURL: 'https://www.google.com/maps/place/%D0%A7%D1%83%D0%B4%D0%BE%D0%B4%D1%96%D1%94%D0%B2%D0%BE+%D0%9F%D0%B0%D1%80%D0%BA+%D0%93%D0%BE%D1%82%D0%B5%D0%BB%D1%8C/@50.358253,28.6233531,574m/data=!3m2!1e3!4b1!4m8!3m7!1s0x472c70986accc2cf:0x7ad2cce3d8d80c65!5m2!4m1!1i2!8m2!3d50.358253!4d28.6255418',
    zitomircampURL: 'https://www.google.com/maps/search/%D0%9A%D0%B0%D1%80%D1%8C%D0%B5%D1%80+%C2%AB%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%B9+%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C%C2%BB/@50.3661077,29.1479143,4590m/data=!3m2!1e3!4b1',
    zitomirpohodURL: 'https://www.google.com/maps/place/%D0%9A%D0%BE%D1%80%D0%BE%D1%81%D1%82%D1%8B%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D0%B0%D1%80%D1%8C%D0%B5%D1%80/@50.3229055,29.0789277,574m/data=!3m1!1e3!4m5!3m4!1s0x472c82216e6350db:0x7b989e078b775ec2!8m2!3d50.3233071!4d29.0795418',
    zitomirotelMap:'<iframe class="googlemap zitomirotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.6359046894027!2d28.623392560046028!3d50.35825298019634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c70986accc2cf%3A0x7ad2cce3d8d80c65!2z0KfRg9C00L7QtNGW0ZTQstC-INCf0LDRgNC6INCT0L7RgtC10LvRjA!5e1!3m2!1sru!2sua!4v1639514677512!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    zitomircampMap:'<iframe class="googlemap zitomircamp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.8563663160094!2d29.192020315728442!3d50.36977397946432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b7c568f789e9d%3A0x788e330fabef4538!2z0LrQsNGA0YzQtdGAINCe0LfQtdGA0L4g0JLRi9GB0L7QutC40Lkg0JrQsNC80LXQvdGM!5e1!3m2!1sru!2sua!4v1639514712717!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    zitomirpohodMap:'<iframe class="googlemap zitomirpohod" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3214.026789246404!2d29.0789277!3d50.3229055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c82216e6350db%3A0x7b989e078b775ec2!2z0JrQvtGA0L7RgdGC0YvRiNC10LLRgdC60LjQuSDQutCw0YDRjNC10YA!5e1!3m2!1sru!2sua!4v1639514738516!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //chernigow1
    chernigow1otel: 'Отель «Log Hause»',
    chernigow1camp: 'Урочище Святое',
    chernigow1pohod: 'Мезинский национальный природный парк',
    chernigow1otelURL: 'https://www.google.com/maps/place/LogHouse/@56.2985933,44.0005526,17z/data=!3m1!4b1!4m8!3m7!1s0x4151d5085e67049d:0x9fd8ad7ab9a0f9d1!5m2!4m1!1i2!8m2!3d56.2985785!4d44.0027464',
    chernigow1campURL: 'https://goo.gl/maps/qyKUynNsGY3utpiK9',
    chernigow1pohodURL: 'https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B7%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%BF%D0%B0%D1%80%D0%BA/@51.7166765,33.022232,557m/data=!3m2!1e3!4b1!4m5!3m4!1s0x412b0c6f6aca8b25:0x20a6671afc5562c7!8m2!3d51.7166765!4d33.0244207',
    chernigow1otelMap:'<iframe class="googlemap chernigow1otel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.8128163452334!2d44.00172806716029!3d56.29854392590546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d5085e67049d%3A0x9fd8ad7ab9a0f9d1!2sLogHouse!5e0!3m2!1sru!2sua!4v1639513977798!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    chernigow1campMap:'<iframe class="googlemap chernigow1camp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4180.192027102882!2d31.28741351635854!3d51.466288623885326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d548d5b3923c15%3A0x25c5e676559b8a2a!2z0YPQuy4g0KPRgNC-0YfQuNGJ0LUg0KHQstGP0YLRjSwg0KfQtdGA0L3QuNCz0L7Qsiwg0KfQtdGA0L3QuNCz0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxNDAwMA!5e0!3m2!1sru!2sua!4v1639514544271!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    chernigow1pohodMap:'<iframe class="googlemap chernigow1pohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.835373851924!2d33.022273057194695!3d51.71667648042532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412b0c6f6aca8b25%3A0x20a6671afc5562c7!2z0JzQtdC30LjQvdGB0LrQuNC5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQv9GA0LjRgNC-0LTQvdGL0Lkg0L_QsNGA0Lo!5e1!3m2!1sru!2sua!4v1639514615339!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //lwow
    lwowotel: 'Парк-отель «Древний град»',
    lwowcamp: 'Озеро Сомин',
    lwowpohod: 'Шацкие озера среди лесов',
    lwowotelURL: 'https://www.google.com/maps/place/%D0%9F%D0%B0%D1%80%D0%BA-%D0%BE%D1%82%D0%B5%D0%BB%D1%8C+%C2%AB%D0%94%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D0%B9+%D0%93%D1%80%D0%B0%D0%B4%C2%BB/@49.8943054,24.1228537,579m/data=!3m2!1e3!4b1!4m8!3m7!1s0x473adb5492321747:0xf869b1bc406707f!5m2!4m1!1i2!8m2!3d49.8942788!4d24.1248736',
    lwowcampURL: 'https://www.google.com/maps/place/%D0%BE%D0%B7.+%D0%A1%D0%BE%D0%BC%D0%B8%D0%BD/@51.2570943,24.4809371,36028m/data=!3m1!1e3!4m9!1m2!2m1!1z0J7Qt9C10YDQviDQodC-0LzQuNC9!3m5!1s0x472428eaab10e30b:0xf451ee392bd08970!8m2!3d51.3211359!4d24.9210952!15sChXQntC30LXRgNC-INCh0L7QvNC40L2SAQRsYWtl',
    lwowpohodURL: 'https://www.google.com/maps/place/%D0%A8%D0%B0%D1%86%D0%BA%D0%B8%D0%B5+%D0%BE%D0%B7%D1%91%D1%80%D0%B0/@51.4999992,23.8245782,2240m/data=!3m2!1e3!4b1!4m5!3m4!1s0x4723e4fbf2c0de2b:0xed7662184b49e67b!8m2!3d51.5!4d23.833333',
    lwowotelMap:'<iframe class="googlemap lwowotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.9194619629225!2d24.12289535216153!3d49.89430538017874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adb5492321747%3A0xf869b1bc406707f!2z0J_QsNGA0Lot0L7RgtC10LvRjCDCq9CU0YDQtdCy0L3QuNC5INCT0YDQsNC0wrs!5e1!3m2!1sru!2sua!4v1639514800086!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    lwowcampMap:'<iframe class="googlemap lwowcamp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d201785.88678511995!2d24.50634298378908!3d51.220983544284216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472428eaab10e30b%3A0xf451ee392bd08970!2z0L7Qty4g0KHQvtC80LjQvQ!5e1!3m2!1sru!2sua!4v1639514845709!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    lwowpohodMap:'<iframe class="googlemap lwowpohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25070.052789733687!2d23.815823432604144!3d51.49999819655668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723e4fbf2c0de2b%3A0xed7662184b49e67b!2z0KjQsNGG0LrQuNC1INC-0LfRkdGA0LA!5e1!3m2!1sru!2sua!4v1639514881446!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //zaporiza
    zaporizaotel: 'База отдыха «Скиф»',
    zaporizacamp: 'Остров Хортица',
    zaporizapohod: 'Елисеевский карьер',
    zaporizaotelURL: 'https://www.google.com/maps/place/%D0%91%D0%B0%D0%B7%D0%B0+%D0%B2%D1%96%D0%B4%D0%BF%D0%BE%D1%87%D0%B8%D0%BD%D0%BA%D1%83+%22%D0%A1%D0%BA%D1%96%D1%84%22/@47.7646247,35.1635039,605m/data=!3m2!1e3!4b1!4m5!3m4!1s0x40dc5f2600500f25:0x7ce13dce34fdd9b2!8m2!3d47.7646247!4d35.1656924',
    zaporizacampURL: 'https://www.google.com/maps/place/%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D0%B0/@47.8193454,35.0345219,19328m/data=!3m2!1e3!4b1!4m5!3m4!1s0x40dc5e2f4c081c77:0xcd696846a61d9cb6!8m2!3d47.8252697!4d35.0871977',
    zaporizapohodURL: 'https://www.google.com/maps/place/%D0%95%D0%BB%D0%B8%D1%81%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D0%B0%D1%80%D1%8C%D0%B5%D1%80/@47.0013612,36.4068461,613m/data=!3m1!1e3!4m12!1m6!3m5!1s0x40e7940b6225514d:0x308f7cd70d4f028a!2z0JXQu9C40YHQtdC10LLRgdC60LjQuSDQutCw0YDRjNC10YA!8m2!3d47.0013612!4d36.4090348!3m4!1s0x40e7940b6225514d:0x308f7cd70d4f028a!8m2!3d47.0013612!4d36.4090348',
    zaporizaotelMap:'<iframe class="googlemap zaporizaotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.76248886222!2d35.163542518915094!3d47.764624679922825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5f2600500f25%3A0x7ce13dce34fdd9b2!2z0JHQsNC30LAg0LLRltC00L_QvtGH0LjQvdC60YMgItCh0LrRltGEIg!5e1!3m2!1sru!2sua!4v1639514925014!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    zaporizacampMap:'<iframe class="googlemap zaporizacamp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108166.44191788712!2d35.03452191976823!3d47.81934544903659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5e2f4c081c77%3A0xcd696846a61d9cb6!2z0KXQvtGA0YLQuNGG0LA!5e1!3m2!1sru!2sua!4v1639514952940!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    zaporizapohodMap:'<iframe class="googlemap zaporizapohod" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3433.1117710974245!2d36.4068461!3d47.0013612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e7940b6225514d%3A0x308f7cd70d4f028a!2z0JXQu9C40YHQtdC10LLRgdC60LjQuSDQutCw0YDRjNC10YA!5e1!3m2!1sru!2sua!4v1639514985730!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //dnepr
    dneprotel: 'Отельно-ресторанный комплекс «Покровский»',
    dneprcamp: 'Кемпинг на берегу реки Чаплинка',
    dneprpohod: 'Лес возле реки Терновка',
    dneprotelURL: 'https://www.google.com/maps/place/%D0%93%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%C2%AB%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%C2%BB/@47.9771428,36.2287731,602m/data=!3m2!1e3!4b1!4m5!3m4!1s0x40ddd1ab88fb7e21:0xa790359433e31e6a!8m2!3d47.9771428!4d36.2309618',
    dneprcampURL: 'https://www.google.com/maps/place/%D1%80.+%D0%A7%D0%B0%D0%BF%D0%BB%D0%B8%D0%BD%D0%BA%D0%B0/@48.8002682,34.615916,37920m/data=!3m2!1e3!4b1!4m5!3m4!1s0x40d970ad68222a81:0xb88e5d018ece9678!8m2!3d48.7807426!4d34.8073263',
    dneprpohodURL: 'https://www.google.com/maps/place/%D1%80.+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0/@48.5888723,36.0351013,38080m/data=!3m2!1e3!4b1!4m5!3m4!1s0x40dec3b6fdb50cd5:0xca0fbae88fefb07e!8m2!3d48.5657505!4d36.1911112',
    dneprotelMap:'<iframe class="googlemap dneprotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.914746727401!2d36.228813589124165!3d47.977142779972816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ddd1ab88fb7e21%3A0xa790359433e31e6a!2z0JPQvtGC0LXQu9GM0L3Qvi3RgNC10YHRgtC-0YDQsNC90L3QuNC5INC60L7QvNC_0LvQtdC60YEgwqvQn9C-0LrRgNC-0LLRgdGM0LrQuNC5wrs!5e1!3m2!1sru!2sua!4v1639515028902!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    dneprcampMap:'<iframe class="googlemap dneprcamp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53131.04506471811!2d34.843022109612306!3d48.72691527282298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d970ad68222a81%3A0xb88e5d018ece9678!2z0YAuINCn0LDQv9C70LjQvdC60LA!5e1!3m2!1sru!2sua!4v1639515124112!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    dneprpohodMap:'<iframe class="googlemap dneprpohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63404.25801823299!2d36.214360471996216!3d48.55122977629076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dec3b6fdb50cd5%3A0xca0fbae88fefb07e!2z0YAuINCi0LXRgNC90L7QstC60LA!5e1!3m2!1sru!2sua!4v1639515170583!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //poltawa
    poltawaotel: 'Отель «Пирамида»',
    poltawacamp: 'Кемпинг-парк',
    poltawapohod: 'Лес вблизи села Сосновка',
    poltawaotelURL: 'https://www.google.com/maps/place/%D0%9F%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0/@49.5841107,37.5090312,74648m/data=!3m1!1e3!4m9!1m2!2m1!1z0J7RgtC10LvRjCDCq9Cf0LjRgNCw0LzQuNC00LDCuyDRhdCw0YDRjNC60L7Qsg!3m5!1s0x4120d754e76b2c21:0xfd9ee85523db1c2b!8m2!3d49.7091643!4d37.6129722!15sCi7QntGC0LXQu9GMIMKr0J_QuNGA0LDQvNC40LTQsMK7INGF0LDRgNGM0LrQvtCykgEDaW5u',
    poltawacampURL: 'https://www.google.com/maps/place/%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0+%D0%B4%D0%BB%D1%8F+%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0./@49.3383487,36.9943624,121699m/data=!3m1!1e3!4m9!1m2!2m1!1z0JrQtdC80L_QuNC90LMt0L_QsNGA0Log0YXQsNGA0YzQutC-0LI!3m5!1s0x4127598173f3fab1:0xd0719a0a71f73983!8m2!3d49.5126655!4d36.4932951!15sCibQmtC10LzQv9C40L3Qsy3Qv9Cw0YDQuiDRhdCw0YDRjNC60L7QslooIibQutC10LzQv9C40L3QsyDQv9Cw0YDQuiDRhdCw0YDRjNC60L7QspIBCmNhbXBncm91bmSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnhlVnBmU1V0bkVBRQ',
    poltawapohodURL: 'https://www.google.com/maps/place/%D0%A1%D0%BE%D1%81%D0%BD%D1%96%D0%B2%D0%BA%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+08054/@50.2231316,29.8265246,15z/data=!3m1!4b1!4m5!3m4!1s0x472b56c99ff5717b:0x39caea66b61ec29a!8m2!3d50.2205192!4d29.8345138',
    poltawaotelMap:'<iframe class="googlemap poltawaotel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13022.037099902647!2d37.6117234233109!3d49.70669977322056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4120d754e76b2c21%3A0xfd9ee85523db1c2b!2z0J_QuNGA0LDQvNC40LTQsA!5e1!3m2!1sru!2sua!4v1639515238087!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    poltawacampMap:'<iframe class="googlemap poltawacamp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31099.38462915641!2d36.487344369621454!3d49.5062848491764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127598173f3fab1%3A0xd0719a0a71f73983!2z0J_QvtC70Y_QvdCwINC00LvRjyDQv9GA0LXQutGA0LDRgdC90L7Qs9C-INC-0YLQtNGL0YXQsC4!5e1!3m2!1sru!2sua!4v1639515277974!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    poltawapohodMap:'<iframe class="googlemap poltawapohod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20421.469712523125!2d29.81776982961043!3d50.223130634442676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b56c99ff5717b%3A0x39caea66b61ec29a!2z0KHQvtGB0L3QvtCy0LrQsCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDgwNTQ!5e0!3m2!1sru!2sua!4v1639515317692!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //sumi
    sumiotel: 'Отель «Hotel Voskresensky»',
    sumicamp: 'Гідрологічний заказник "Перелісківський"',
    sumipohod: 'Лес вблизи Воеводина Озера',
    sumiotelURL: 'https://www.google.com/maps/place/%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9/@50.9124926,34.8002757,17z/data=!4m9!1m2!2m1!1z0J7RgtC10LvRjCDCq0hvdGVsIFZvc2tyZXNlbnNrecK7!3m5!1s0x41290226e2808ca5:0x315a46fbdc70a134!5m2!4m1!1i2!15sCiHQntGC0LXQu9GMIMKrSG90ZWwgVm9za3Jlc2Vuc2t5wrtaHyId0L7RgtC10LvRjCBob3RlbCB2b3NrcmVzZW5za3mSAQVob3RlbA',
    sumicampURL: 'https://goo.gl/maps/mJxbcLtVYf63uTS17',
    sumipohodURL: 'https://goo.gl/maps/tqjRago5Dw7hHw3CA',
    sumiotelMap:'<iframe class="googlemap sumiotel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3173.988174275815!2d34.8002757!3d50.9124926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290226e2808ca5%3A0x315a46fbdc70a134!2z0JLQvtGB0LrRgNC10YHQtdC90YHQutC40Lk!5e1!3m2!1sru!2sua!4v1639515376609!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    sumicampMap:'<iframe class="googlemap sumicamp" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25525.118617739165!2d34.7296566593994!3d50.66789359930494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412851b787b641d1%3A0x71bf684ce3022686!2zSGlkcm9sb2hpY2hueXkgWmFrYXpueWsgIlBlcmVsaXNraXZzyrlreXkiLCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e1!3m2!1sru!2sua!4v1639516160764!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    sumipohodMap:'<iframe class="googlemap sumipohod" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2519.1075696178928!2d34.86106136582709!3d50.84769227510605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4128fefa8b419259%3A0x33057340c6a35dd9!2z0JLQvtC10LLQvtC00LjQvdCwINCe0LfQtdGA0LA!5e0!3m2!1sru!2sua!4v1639516472061!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    //chernigow2
    chernigow2otel: 'Отель «Славянский»',
    chernigow2camp: 'Кемпинг возле озера в селе Спадщина',
    chernigow2pohod: 'Еловщина',
    chernigow2otelURL: 'https://www.google.com/maps/place/%D0%A1%D0%BB%D0%BE%D0%B2\'%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9/@50.0946851,32.4807343,8z/data=!4m9!1m2!2m1!1z0J7RgtC10LvRjCDCq9Ch0LvQsNCy0Y_QvdGB0LrQuNC5wrs!3m5!1s0x40d14b7d0555a577:0xe119e76be0ff96b!8m2!3d49.4449045!4d32.0636848!15sCiPQntGC0LXQu9GMIMKr0KHQu9Cw0LLRj9C90YHQutC40LnCu1ohIh_QvtGC0LXQu9GMINGB0LvQsNCy0Y_QvdGB0LrQuNC5kgETaGlzdG9yaWNhbF9sYW5kbWFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOeGVrdG1iMU5CRUFF',
    chernigow2campURL: 'https://www.google.com/maps/place/%D0%A1%D0%BF%D0%B0%D0%B4%D1%89%D0%B8%D0%BD%D0%B0,+%D0%A1%D1%83%D0%BC%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+41507/@51.3414388,33.7255792,15z/data=!3m1!4b1!4m5!3m4!1s0x412bcfe1ff1d9655:0xb37ab5eef5719290!8m2!3d51.3398369!4d33.7352626',
    chernigow2pohodURL: 'https://goo.gl/maps/NUb6kCh3ZHGNnAqWA',
    chernigow2otelMap:'<iframe class="googlemap chernigow2otel" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6587.271691225057!2d30.782113689368806!3d49.13534880000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d2333faaaaaaab%3A0x10e68b834099fe42!2z0KHQu9Cw0LLRj9C90YHQutC40Lkg0KLQtdGA0LXQvNC-0Lo!5e1!3m2!1sru!2sua!4v1639516674354!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    chernigow2campMap:'<iframe class="googlemap chernigow2camp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578.588677914362!2d33.72557924291693!3d51.34143877372974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412bcfe1ff1d9655%3A0xb37ab5eef5719290!2z0KHQv9Cw0LTRidC40L3QsCwg0KHRg9C80YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQxNTA3!5e1!3m2!1sru!2sua!4v1639516742508!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',
    chernigow2pohodMap:'<iframe class="googlemap chernigow2pohod" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10534.2654841557!2d31.29378060969241!3d51.52763579428513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d54875a41069af%3A0x6623afbf9e161d8c!2z0JXQu9C-0LLRidC40L3QsA!5e1!3m2!1sru!2sua!4v1639516955034!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">',


}




