<script setup>
import { ref } from 'vue'
let form = ref({

})
</script>
<template>
    <div class="page-archives">
        <a-row :gutter="24">
            <a-col flex="855px" class="grid-demo">
                <div class="archives">
                    <div class="searchs">
                        <a-form :model="form" layout="vertical">
                                    <a-row :gutter="16">
                                        <a-col :span="6">
                                            <a-form-item field="value1" label="Keyword" label-col-flex="100px">
                                                <a-input v-model="form.value1" placeholder="please enter" />
                                            </a-form-item>
                                        </a-col>
                                        <a-col :span="6">
                                            <a-form-item field="value2" label="Contact way" label-col-flex="80px">
                                                <a-input v-model="form.value2" placeholder="please enter" />
                                            </a-form-item>
                                        </a-col>
                                        <a-col :span="6">
                                            <a-form-item field="value3" label="Journal" label-col-flex="80px">
                                                <a-select :style="{ width: '100%' }" placeholder="Please select">
                                                    <a-option>Beijing</a-option>
                                                    <a-option>Shanghai</a-option>
                                                    <a-option>Guangzhou</a-option>
                                                    <a-option disabled>Disabled</a-option>
                                                </a-select>
                                            </a-form-item>
                                        </a-col>
                                        <a-col :span="6">
                                            <a-form-item field="value3" label="Article Type" label-col-flex="80px">
                                                <a-select :style="{ width: '100%' }" placeholder="Please select">
                                                    <a-option>Beijing</a-option>
                                                    <a-option>Shanghai</a-option>
                                                    <a-option>Guangzhou</a-option>
                                                    <a-option disabled>Disabled</a-option>
                                                </a-select>
                                            </a-form-item>
                                        </a-col>
                                    </a-row>
                                </a-form>
                    </div>
                    <div class="breadcrumb">
                        <a href="">Home</a> > <a href="">Archives </a> >Vol. 1 No. 4 (2022): Biomaterials and Polymers
                        Horizon
                    </div>
                    <p class="title">
                        Photocatalytic efficiency of green synthesized ZnO nanoparticles for the degradation of methyl
                        orange
                        dye: A review
                    </p>
                    <div class="banners">
                        <a-carousel :style="{
                            width: '100%',
                            height: '340px',
                        }" :default-current="2" >
                            <a-carousel-item>
                                <img src="../../assets/image/home_banner.png" :style="{
                                    width: '100%',
                                }" />
                            </a-carousel-item>
                            <a-carousel-item>
                                <img src="../../assets/image/home_banner.png" :style="{
                                    width: '100%',
                                }" />
                            </a-carousel-item>
                            <a-carousel-item>
                                <img src="../../assets/image/home_banner.png" :style="{
                                    width: '100%',
                                }" />
                            </a-carousel-item>
                            <a-carousel-item>
                                <img src="../../assets/image/home_banner.png" :style="{
                                    width: '100%',
                                }" />
                            </a-carousel-item>
                        </a-carousel>
                    </div>
                    <div class="acoustics">
                        <p class="title">
                            Acoustics
                        </p>
                        <p>
                            Acoustics is an international, peer-reviewed, open access journal on acoustics science and
                            engineering, published quarterly online by MDPI.
                        </p>
                        <ul>
                            <li>
                                <a href=""> Open Access</a> — free for readers, with article processing charges (APC)
                                paid by authors or their institutions.
                            </li>
                            <li>
                                <a href=""> High Visibility</a> — indexed within ESCI (Web of Science), Scopus, and
                                other databases.
                            </li>
                            <li>
                                <a href=""> Open Access</a> — free for readers, with article processing charges (APC)
                                paid by authors or their institutions.
                            </li>
                        </ul>
                        <div class="impact">
                            <span>
                                Impact Factor:
                            </span> 1.3 (2023); 5-Year Impact Factor: 1.9 (2023)
                        </div>
                        <div class="datas">
                            <span>
                                <icon-sort /> Imprint Information
                            </span>
                            <a-divider direction="vertical" />
                            <span>
                                <icon-download /> Journal Flyer
                            </span>
                            <a-divider direction="vertical" />
                            <span>
                                <icon-lock /> Open Access
                            </span>
                            <a-divider direction="vertical" />
                            <span>
                                ISSN: 2624-599X
                            </span>
                        </div>
                    </div>
                    <div class="labels">
                        <a href="" class="active"> Article </a>
                        <a href=""> References </a>
                        <a href=""> Metrics </a>
                        <a href=""> Related Content </a>
                    </div>
                    <div class="users">
                        <span>
                            <img src="../../assets/image/user.png" alt="">
                            Naveen Thakur
                        </span>
                        <span>
                            <img src="../../assets/image/user.png" alt="">
                            Naveen Thakur
                        </span>
                        <span>
                            <img src="../../assets/image/user.png" alt="">
                            Naveen Thakur
                        </span>
                        <span>
                            <img src="../../assets/image/user.png" alt="">
                            Naveen Thakur
                        </span>
                    </div>
                    <div class="content">
                        <p class="title">Abstract</p>
                        <p class="desc">
                            The primary global source of water pollution is industrial and textile dyes. These
                            industries produce Highly stable organic dyes that are released untreated into nearby ponds,
                            lakes and rivers. As ZnO nanoparticles (NPs) are inexpensive, non-toxic, chemically and
                            thermally stable, and have a higher UV absorption capacity, they are an effective
                            nano-catalyst for removing hazardous contaminants such as organic and inorganic dyes from
                            wastewater. The green synthesis of synthesised ZnO NPs, their shape and size, and their
                            photocatalytic effectiveness against the dye methyl orange are all described in this paper.
                            The emphasis is on environmentally friendly synthesis of ZnO NPs using plant extracts
                            because the synthesis process impacts the characteristics and applications of ZnO NPs.
                            Additionally, based on recently published literature, the shape and size factors that affect
                            the photocatalytic activity in the degradation of MO dye are highlighted.
                        </p>
                    </div>
                    <div class="actions">
                        <a href=""><img src="../../assets/image/pdf-w.png" alt=""> Download PDF</a>
                        <a href=""><img src="../../assets/image/file-pdf.png" alt=""> PDF</a>
                    </div>
                </div>
            </a-col>
            <a-col flex="354px" class="grid-demo">
                <div class="right-content" style="">
                    <div class="btns">
                        <a href="">Start Submission</a>
                        <a href="">Become a Reviewer</a>
                    </div>
                    <div class="details">
                        <div class="detail">
                            <p class="title">E-Mail <span> Alert </span></p>
                            <p class="desc">
                                Add your e-mail address to receive forthcoming issues of this journal:
                            </p>
                            <div style="margin: 20px 0;">
                                <a-input :style="{ width: '100%' }" placeholder="Please enter Email" allow-clear>
                                    <template #prepend>
                                        Email
                                    </template>
                                </a-input>
                                <div style="margin: 10px 0;text-align: center;">
                                    <a-button style="width: 100%;">subscribe</a-button>
                                </div>
                            </div>
                        </div>
                        <div class="detail">
                            <p class="title">Article <span>Details </span></p>
                            <p class="desc">
                                DOI: <br>
                                <span> https://doi.org/10.37819/bph.1.330</span> <br>
                                2022-11-20
                            </p>
                        </div>
                        <div class="read">
                            <p class="title">
                                Most Read <span>This Month</span>
                            </p>
                            <p class="label">
                                Most read articles by the same</p>
                            <p class="desc">
                                author(s)Naveen Thakur, Nikesh Thakur, Pankaj Chauhan, Kuldeep Kumar, Pal Sharma,
                                Futuristic role of nanoparticles for treatment of COVID-19, Biomaterials and Polymers
                                Horizon: Vol. 1 No. 2 (2022):Biomaterials and Polymers Horizon Naveen Thakur, Pankaj
                                Kumar, Nikesh Thakur, Kuldeep Kumar, Ashwani Tapwal, Pankaj Sharma, A review of new
                                developments in the synthesis of CuO nanoparticles via plant extracts for enhancing the
                                photocatalytic for enhancing the photocatalytic activity Biomaterials and Polymers
                                Horizon: Vol. 1 No. 4 (2022): Biomaterials and Polymers Horizon

                            </p>
                        </div>
                        <div class="license">
                            <p class="title">License</p>
                            <p class="desc">
                                Copyright (c) 2022 Naveen Thakur, Nikesh Thakur, Kuldeep Kumar, Vedpriya Arya, Ashwani
                                Kumar, Susheel K alia
                            </p>
                            <p class="desc">
                                This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives
                                4.0 International License
                            </p>
                        </div>
                    </div>

                </div>
            </a-col>
        </a-row>
    </div>
</template>
<style lang="less" scoped>
.page-archives {
    width: 1240px;
    margin: auto;
    padding: 80px 0;

    .searchs {
        margin-bottom: 40px;
    }

    .breadcrumb {
        height: 57px;
        line-height: 57px;

        a {
            display: inline-block;
            color: #101828;
        }
    }

    .banners {
        margin-top: 50px;
    }

    .acoustics {
        margin-bottom: 40px;
        padding: 20px 0;
        border-bottom: 1px solid #ECECECE5;

        &>p.title {
            font-size: 30px;
            font-weight: 600;
            line-height: 30px;
            color: #1F3C8A;
            line-height: 60px;
            margin-top: 12px;
        }

        .desc {
            margin-top: 12px;
            font-size: 14px;
            line-height: 21px;
        }

        ul {
            padding-left: 20px;
            margin-top: 10px;

            li {
                list-style-type: disc;
                line-height: 27px;

                a {
                    font-weight: 600;
                }
            }
        }

        .impact {
            margin: 20px 0;
            font-size: 14px;
            line-height: 21px;

            span {
                font-weight: 600;
            }
        }

        .datas {
            margin: 20px 0;
            font-size: 14px;
        }
    }

    &>p.title {
        font-size: 40px;
        font-weight: 600;
        line-height: 30px;
        color: #1F3C8A;
        line-height: 60px;
        margin-top: 12px;
    }

    .labels {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 24px;

        a {
            display: inline-block;
            padding: 12.5px 34px;
            background: #fff;
            color: #101828;
            font-size: 16px;
            margin-right: 16px;
            border-radius: 4px;

            &.active {
                background: #E8705A;
                color: #fff;
            }

            &:hover {
                background: #E8705A;
                color: #fff;
            }

        }
    }

    .users {
        margin-top: 24px;

        span {
            margin-right: 23px;

            img {
                width: 16px;
            }

            color: #000000DE;
            font-size: 16px;
            line-height: 24px;
        }
    }

    .content {
        padding: 20px;
        background: #fff;
        margin-top: 12px;

        &>.title {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            color: #1F3C8A;
            border-bottom: 1px solid #C2C2C2;
        }

        &>.desc {
            margin-top: 12px;
            font-size: 14px;
            line-height: 21px;

        }
    }

    .actions {
        margin: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 180px;
            height: 45px;
            border-radius: 4px;
            background: #E8705A;
            color: #fff;
            border: 1px solid #E8705A;
            font-weight: 600;
            margin-right: 12px;

            img {
                width: 16px;
                margin-right: 8px;
            }

            &:last-child {
                background: #fff;
                color: #E8705A;
            }
        }
    }


    .right-content {
        width: 360px;

        .btns {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                display: inline-block;
                width: 174px;
                height: 45px;
                border-radius: 4px;
                text-align: center;
                line-height: 45px;
                background: #E8705A;
                color: #fff;
                font-size: 14px;
                font-weight: 600;
            }

            a:last-child {
                background: #fff;
                border: 1px solid #E8705A;
                color: #E8705A;
            }

        }

        .details {
            margin-top: 24px;
            border: 1px solid #ECECECE5;
            padding: 20px;
            border-radius: 12px;

            &>div {
                padding: 20px;
                background: #fff;
                border-radius: 8px;
                margin-top: 24px;
            }

            .detail {
                margin-top: 0;

                .title {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 30px;
                    color: #1F3C8A;

                    span {
                        color: #E8705A;
                    }
                }

                .desc {
                    margin-top: 8px;
                    font-style: 16px;
                    line-height: 25px;
                    color: #101828;

                    span {
                        color: #1F3C8A;
                    }
                }

            }

            .read {
                .title {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 30px;
                    color: #1F3C8A;

                    span {
                        color: #E8705A;
                    }
                }

                .label {
                    margin-top: 8px;
                    font-style: 16px;
                    line-height: 24.99px;
                }

                .desc {
                    margin-top: 18px;
                    font-style: 16px;
                    line-height: 24.99px;
                }

            }

            .license {
                .title {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 30px;
                    color: #1F3C8A;
                    margin-bottom: 8px;
                }

                .desc {
                    margin-bottom: 18px;
                    font-style: 16px;
                    line-height: 24.99px;
                }
            }
        }

    }
}
</style>
<style>
.page-content {
    background: #FFFAF9;
}
</style>