<template>
    <div class="container-hk">
        <h1>愛讀教育中心</h1>
        <h2>IEDU Center</h2>
        <h3>Invoice</h3>
        <table class="msg">
            <tbody>
                <tr>
                    <td>
                        Name of Student: Angella<br>
                        Handled by: Keith Woon<br>
                        Date oflnvoice: 0110512025
                    </td>
                    <td>
                        Shop 13,1/F,Victoria Mall,188 canton Road,<br>
                        Tsim Sha Tsui,Kowloon<br>
                        2025.05.01 to 2025.05.31
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="page">Page 1 of 1</p>
        <p class="title">Individual Lesson Details:</p>
        <table class="detail">
            <tbody>
                <tr>
                    <td>Date</td>
                    <td>Day</td>
                    <td>Start</td>
                    <td>End</td>
                    <td>Teacher</td>
                    <td>Subject/Grade</td>
                    <td>Status Fee</td>
                </tr>
                <tr>
                    <td>05/05/2025</td>
                    <td>Mon</td>
                    <td>17:00</td>
                    <td>18:30</td>
                    <td>MiuMiu</td>
                    <td>Chin</td>
                    <td>HK$750</td>
                </tr>
                <tr>
                    <td>10/05/2025</td>
                    <td>Sat</td>
                    <td>14:00</td>
                    <td>15:30</td>
                    <td>Christine</td>
                    <td>Eng</td>
                    <td>HK$750</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <p class="title">Others:</p>
        <table class="other">
            <tbody>
                <tr>
                    <td colspan="7">Remarks</td>
                    <td colspan="3">Fee</td>
                </tr>
                <tr>
                    <td colspan="7"></td>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <td colspan="7"></td>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <td colspan="7"></td>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <td colspan="7"></td>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <td colspan="7" class="right-border">Payment Methods</td>
                    <td colspan="3" rowspan="2" class="table-wrap">
                        <div class="others-in">
                            <component :is="YinZhang" left="1cm" top="0.2cm" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Individual Less on : $</td>
                                        <td>1,500</td>
                                    </tr>
                                    <tr>
                                        <td>Privale Group : $</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Course : $</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Others $</td>
                                        <td></td>
                                    </tr>
                                    <tr class="bold">
                                        <td>Total : $</td>
                                        <td>1,500.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="7" class="text-left right-border">
                        -Cash<br>
                        -Cheque （Payable to:<br>
                        -Bank Transfer:<br>
                        -PayMe:<br>
                        -FPS ID:
                    </td>
                </tr>
                <tr>
                    <td colspan="10">Tems and Conditions</td>
                </tr>
                <tr>
                    <td colspan="10">
                        <div class="conditons-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>1.For lesson and academic consulting booking,all payment must be
                                                    settled
                                                    priortothe indicated paymentdeadlin.</li>
                                                <li>2Lessonreschedulingisgrantedunderthefollowingconditions:
                                                    <ol>
                                                        <li>a)Withatleast36-hour notice.</li>
                                                        <li>b)Thelessonshouldberescheduledinthesamemonth.Ifthe lessonto
                                                            be
                                                            rescheduled is in
                                                            the lastweekofamonth,the
                                                            lessonshouldberescheduledwithin7days.
                                                        </li>
                                                        <li>c)THECENTREwillschedulethesameteacherforthestudent. However,
                                                            ifa
                                                            particular
                                                            teacherisfulybooked,wewillarrange an
                                                            appropriatesubjectspecialistforthe lesson.</li>
                                                        <li>d)Anypricedifferencesoccurredwhen
                                                            reschedulingacourselessontoa
                                                            privatelesson
                                                            shouldbe settledbeforethelesson.</li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    3.Forstudentsickleave,adoctor'snoteshouldbeprovidedandthemake-uplessonshould
                                                    be reschedul</li>
                                                <li>
                                                    4.IEDU Education Centre will inform Parentor students at least one
                                                    week
                                                    before the starting date of the course if there is only one
                                                    enrollment
                                                    in
                                                    the course. The course will automatically converted to private
                                                    lesson
                                                    until
                                                    there is new enrollment to the course. Or parents and students can
                                                    ask
                                                    for
                                                    refund.
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <div class="box">
                                                <p>CO =Course</p>
                                                <p>PL = PriLesson</p>
                                                <p>PG= PriGroup</p>
                                                <p>CF =Confirmed</p>
                                                <p>QO =ToBeConfirmed</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useHead } from 'nuxt/app'

const YinZhang = defineAsyncComponent(() => import('~/components/zhaosheng/YinZhang.vue'))


useHead({
    link: [
        {
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "//www.ieduchina.com/statics/pcc/img/favicon.ico"
        }
    ],
    script: [
        {
            src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
            type: "text/javascript",
            defer: true
        }
    ],
    title: '收款收据',
    meta: [
        { name: 'description', content: '收款收据' },
        { name: 'keywords', content: '收款，收据' }
    ]
})

</script>
<style lang="less" scoped>
@media print {
    @page {
        margin: 0.5cm;
        mso-header: none;
        mso-footer: none;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
}

.container-hk {
    width: 18cm;
    margin: 0.5cm auto;

    h1 {
        text-align: center;
        font-weight: bold;
        font-size: 0.8cm;
        color: rgb(0, 65, 141);
        letter-spacing: 0.1cm;
    }

    h2 {
        text-align: center;
        font-size: 0.5cm;
        color: rgb(108, 107, 106);
        line-height: 1.8;
        letter-spacing: 0.08cm;
        font-weight: 100;
    }

    h3 {
        text-align: center;
        font-size: 0.5cm;
        color: rgb(1, 35, 39);
    }

    .msg {
        width: 100%;
        margin-top: 0.5cm;

        tr {
            td {
                width: 55%;
                font-size: 0.34cm;
                line-height: 1.2;

                &:last-of-type {
                    width: 45%;
                }
            }
        }
    }

    .page {
        text-align: right;
        font-size: 0.24cm;
        padding-right: 2cm;
        line-height: 1.2;
    }

    .title {
        font-size: 0.34cm;
        line-height: 1.2;
    }

    .detail {
        width: 100%;
        border: solid 1px rgb(1, 35, 39);

        tr {

            border-bottom: solid 1px rgb(1, 35, 39);

            &:nth-of-type(even) {
                background-color: rgb(213, 213, 213);
            }

            td {
                text-align: center;
                font-size: 0.34cm;
                line-height: 0.6cm;
                height: 0.6cm;

                &:first-of-type {
                    text-align: left;
                    padding-left: 0.2cm;
                }
            }
        }
    }

    .other {
        width: 100%;
        border: solid 1px rgb(1, 35, 39);

        tr {
            border-bottom: solid 1px rgb(1, 35, 39);

            &:nth-of-type(even) {
                background-color: rgb(213, 213, 213);
            }

            &:nth-last-of-type(-n + 4) {
                background-color: transparent;
            }

            td {
                text-align: center;
                font-size: 0.34cm;
                line-height: 0.6cm;
                height: 0.6cm;

                &.text-left {
                    text-align: left;
                    padding-left: 0.2cm;
                }

                &.right-border {
                    border: solid 1px rgb(1, 35, 39);
                }

                &.table-wrap {

                    .others-in {
                        padding: 0.2cm;

                        table {
                            width: 100%;

                            tr {
                                border: none;

                                td {
                                    text-align: right;
                                }

                                &.bold {
                                    td {
                                        font-size: 0.4cm;
                                        font-weight: bold;
                                    }
                                }
                            }
                        }
                    }
                }

                .conditons-table {
                    padding: 0.2cm 0;

                    table {
                        tr {
                            border: none;

                            td {
                                text-align: left;

                                &:last-of-type {
                                    vertical-align: bottom;
                                }

                                ul {
                                    li {
                                        line-height: 1.2;
                                        padding-left: 1em;
                                        padding-top: 0.1cm;
                                    }
                                }

                                .box {
                                    border: solid 1px rgb(1, 35, 39);
                                    padding: 0.2cm;
                                    margin: 1cm 0.2cm 0.2cm 0.2cm;

                                    p {
                                        white-space: nowrap;
                                        line-height: 1.2;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>