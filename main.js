//object from server
$SPECDT = [{
        group: 'General',
        items: [{
                name: 'Model',
                value: 'DC11'
            },
            {
                name: 'Delivery time',
                value: '2-3 weeks'
            },
        ],
    },
    {
        group: 'Engine',
        items: [{
            name: 'bhp',
            value: '404'
        }, ],
    },
    {
        group: 'specials',
        text: 'convertible, leather seats',
    },
];


// Changes when we reach the min-width:768
$(function ($) {
    elementCreate();
    window.addEventListener('resize',elementCreate );
})

//in this case i'm useing SPECDT object (Array type) as object from server
function elementCreate() {
    $triger = false
    //normali hier this function call ajax function and as promis or async waite for object and then start to create
    $param = $SPECDT
if($param){
    if (window.matchMedia('(min-width: 768px)').matches) {
        $triger = false
        if ($triger) {
            null
        } else {
            normalCreate($param)
            $triger = true
        }
    } else {
        $triger = true
        if (!$triger) {
            null
        } else {
            responsCreate($param)
            $triger = false
        }
    }
}else{
    //hier can be create error 
    null
}
};
// toggle function
function toggle(e, togglename) {
    for (let i = 0; i < $('.Tab-content').length; i++) {
        $('.Tab-content')[i].style.display = "none";
    }
    for (let i = 0; i < $('.tablinks').length; i++) {
        $('.tablinks')[i].className = $('.tablinks')[i].className.replace(" active", "");
    }
    $("#" + togglename.id).css("display", "block");
    e.currentTarget.className += " active";
}

// elemnt creator for normal size
function normalCreate(obj) {
    $('#spec').html('')
    $('#spec').append('<h2>AUFGABE</h2>')
    $('#spec').append('<p>Ein Traum auf vier R&auml;dern...</p>')
    $('#spec').append('<div class="Btn-cont" id="Btncont"></div>')


    for (let i = 0; i < obj.length; i++) {
        if (i === 0) {
            $('#Btncont').append("<button class='tablinks active' style='display: block' onclick='toggle(event," + obj[i].group + ")'>" + obj[i].group + "</button>")
            if (obj[i].items) {
                $var1 = ''
                for (let x = 0; x < obj[i].items.length; x++) {
                    $var1 += '<dt>' + obj[i].items[x].name + '</dt><dd>' + obj[i].items[x].value + '</dd>'
                }
                $('#spec').append('<div id="' + obj[i].group + '" style="display: block" class="Tab-content "><dl>' + $var1 + '</dl></div>')
            } else {
                $('#spec').append('<div id="' + obj[i].group + '" style="display: block" class="Tab-content "><span>' + obj[i].text + '</span></div>')
            }
        } else {
            $('#Btncont').append('<button class="tablinks"  onclick="toggle(event, ' + obj[i].group + ')">' + obj[i].group + '</button>')
            if (obj[i].items) {
                $var1 = ''
                for (let x = 0; x < obj[i].items.length; x++) {
                    $var1 += '<dt>' + obj[i].items[x].name + '</dt><dd>' + obj[i].items[x].value + '</dd>'
                }
                $('#spec').append('<div id="' + obj[i].group + '"  class="Tab-content "><dl>' + $var1 + '</dl></div>')
            } else {
                $('#spec').append('<div id="' + obj[i].group + '"  class="Tab-content "><span>' + obj[i].text + '</span></div>')

            }
        }
    }

}

// elemnt creator for small or responsive size

function responsCreate(obj) {
    $('#spec').html('')
    $('#spec').append('<h2>AUFGABE</h2>')
    $('#spec').append('<p>Ein Traum auf vier R&auml;dern...</p>')
    $('#spec').append('<div class="Btn-cont" id="Btncont"></div>')

    for (let i = 0; i < obj.length; i++) {
        if (i === 0) {
            $('#Btncont').append("<button class='tablinks active' style='display: block' onclick='toggle(event," + obj[i].group + ")'>" + obj[i].group + "</button>")
            if (obj[i].items) {
                $var1 = ''
                for (let x = 0; x < obj[i].items.length; x++) {
                    $var1 += '<dt>' + obj[i].items[x].name + '</dt><dd>' + obj[i].items[x].value + '</dd>'
                }
                $('#Btncont').append('<div id="' + obj[i].group + '" style="display: block" class="Tab-content "><dl>' + $var1 + '</dl></div>')
            } else {
                $('#Btncont').append('<div id="' + obj[i].group + '" style="display: block" class="Tab-content "><span>' + obj[i].text + '</span></div>')
            }
        } else {
            $('#Btncont').append('<button class="tablinks"  onclick="toggle(event, ' + obj[i].group + ')">' + obj[i].group + '</button>')
            if (obj[i].items) {
                $var1 = ''
                for (let x = 0; x < obj[i].items.length; x++) {
                    $var1 += '<dt>' + obj[i].items[x].name + '</dt><dd>' + obj[i].items[x].value + '</dd>'
                }
                $('#Btncont').append('<div id="' + obj[i].group + '"  class="Tab-content "><dl>' + $var1 + '</dl></div>')
            } else {
                $('#Btncont').append('<div id="' + obj[i].group + '"  class="Tab-content "><span>' + obj[i].text + '</span></div>')

            }
        }
    }

}