function create_course_row(id, course, credit) {
    var course_row_element = `
                        <td style = 'width: 40%;' id='${id}-course'>${course}</td>
                        <td style='width: 40%;' id='${id}-credit'>${credit}</td>
                        <td style='width: 20%;'>
                            <select class='form-select' id='${id}-grade'>
                                <option value='4'>A</option>
                                <option value='3.5'>B+</option>
                                <option value='3'>B</option>
                                <option value='2.5'>C+</option>
                                <option value='2'>C</option>
                                <option value='1.5'>D+</option>
                                <option value='1'>D</option>
                                <option value='0'>F</option>
                            </select>
                        </td>`
    var row = document.createElement("tr");
    row.id = id
    row.innerHTML = course_row_element;
    return row
}

function add_course_row_to(element_id, course_row) {
    document.getElementById(element_id).append(course_row)
}

function start() {
    course_n = prompt("กรุณากรอกจำนวนวิชาที่ลงทะเบียนในเทอมนี้")
    for (var n = 1; n <= course_n; n++) {
        let course = prompt("กรุณากรอกรหัสกระบวนวิชาที่ " + n)
        let credit = prompt("กรุณากรอกหน่วยกิตของวิชา " + course)
        let row = create_course_row(n, course, credit)
        add_course_row_to('course_table_body', row)
    }
}

function calculate_gpa() {
    var sum_credit = 0
    var sum_value = 0
    var gpa = 0

    for (var n = 1; n <= course_n; n++) {
        this_credit = parseInt(document.getElementById(n + '-credit').innerHTML)
        this_grade = parseFloat(document.getElementById(n + '-grade').value)
        this_value = this_credit * this_grade
        console.log(this_value);
        sum_credit = sum_credit + this_credit
        sum_value = sum_value + this_value
    }

    console.log('หน่วยกิตรวม');
    console.log(sum_credit);


    gpa = parseFloat(sum_value / sum_credit).toFixed(2)
    return gpa
}

function show_gpa_at(element_id) {

    var gpa = calculate_gpa()
    document.getElementById(element_id).innerHTML = gpa
}

var course_n = 0
