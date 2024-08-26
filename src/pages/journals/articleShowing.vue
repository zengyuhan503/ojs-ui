<script setup>
import { ref } from 'vue'
let form = ref({

})
</script>
<template>
    <div class="page-articel">

        <div class="articel-showing">
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
                <a href="">Home</a> > <a href="">Archives </a> >Vol. 1 No. 4 (2022): Biomaterials and
                Polymers
                Horizon
            </div>
            <a-row :gutter="40">
                <a-col flex="316px" class="">
                    <div class="left-content">
                        <p class="title">
                            Acoustics
                        </p>
                        <div class="btns">
                            <a href="" class="active">Submit to this Journal</a>
                            <a href="">Review for this Journal</a>
                            <a href="">Prpose a Special Issue</a>
                        </div>
                        <div class="content">
                            <p class="title">
                                Article Menu
                            </p>
                            <div class="academic">
                                <p class="title">Acadmic Editors</p>
                                <div>
                                    <span>
                                        <icon-user />
                                    </span>
                                    Jian Kang
                                </div>
                                <div>
                                    <span>
                                        <icon-user />
                                    </span>
                                    Jian Kang
                                </div>
                                <div>
                                    <span>
                                        <icon-user />
                                    </span>
                                    Jian Kang
                                </div>
                            </div>
                            <div class="links">
                                <ul>
                                    <li class="no_child"><a href="">Subscribe SciFeed</a></li>
                                    <li class="no_child"><a href="">Recommended Articles</a></li>
                                    <li>
                                        <a-collapse :bordered="false" expand-icon-position="right"
                                            :default-active-key="['1', 2]">
                                            <a-collapse-item header="Related Info Link" key="1">
                                                <div>
                                                    <icon-link />Google Scholar
                                                </div>
                                            </a-collapse-item>
                                        </a-collapse>
                                    </li>
                                    <li>
                                        <a-collapse :bordered="false" expand-icon-position="right"
                                            :default-active-key="['1', 2]">
                                            <a-collapse-item header="More by Authors Links" key="1">
                                                <div class="item">
                                                    <icon-link />on DOAJ
                                                </div>
                                                <div class="item">
                                                    <icon-link />on Google Scholar
                                                </div>
                                                <div class="item">
                                                    <icon-link />on PubMed
                                                </div>
                                            </a-collapse-item>
                                        </a-collapse>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="views">
                            <p>Article Views</p>
                            <p>275</p>
                        </div>
                        <div class="contents">
                            <p class="tilte">Table of Contents</p>
                            <ul>
                                <li><span class="rank">1.</span> Introduction</li>
                                <li><span class="rank">2.</span> Introduction</li>
                                <li><span class="rank">3.</span> Introduction</li>
                                <li><span class="rank">4.</span> Introduction</li>
                                <li><span class="rank">5.</span> Introduction</li>
                            </ul>
                        </div>
                    </div>
                </a-col>
                <a-col flex="950px">
                    <div class="right-content">

                        <div class="articles" id="basic-demo">
                            <p class="title">
                                Feasibility Analysis for Active Noise Cancellation Using the Electrical Power Steering
                                Motor
                            </p>
                            <p class="creators">
                                by：
                                <a-popover title="">
                                    <span>Author
                                        <icon-email />
                                    </span>
                                    <template #content>
                                        <div class="author_info">
                                            <div class="user">
                                                <span>
                                                    <icon-user />
                                                </span>
                                                Author Name
                                            </div>
                                            <div class="info">
                                                <a-space>
                                                    <a-button size="mini">SciProfiles</a-button>
                                                    <a-button size="mini">Scilit</a-button>
                                                    <a-button size="mini">Preprints.org</a-button>
                                                    <a-button size="mini">Google Scholar</a-button>
                                                </a-space>

                                            </div>
                                        </div>
                                    </template>
                                </a-popover>
                                <a-divider direction="vertical" />

                                <a-popover title="">
                                    <span>Author
                                        <icon-email />
                                    </span>
                                    <template #content>
                                        <div class="author_info">
                                            <div class="user">
                                                <span>
                                                    <icon-user />
                                                </span>
                                                Author Name
                                            </div>
                                            <div class="info">
                                                <a-space>
                                                    <a-button size="mini">SciProfiles</a-button>
                                                    <a-button size="mini">Scilit</a-button>
                                                    <a-button size="mini">Preprints.org</a-button>
                                                    <a-button size="mini">Google Scholar</a-button>
                                                </a-space>

                                            </div>
                                        </div>
                                    </template>
                                </a-popover>
                            </p>
                            <div class="descs">
                                <ul>
                                    <li>
                                        Department of Mechanical Engineering, Munich University of Applied Sciences,
                                        Lothstr. 64, 80335 Munich,
                                        Germany</li>
                                    <li>

                                        Department of Electrical Engineering and Information Technology, Munich
                                        University of Applied Sciences,
                                        Lothstr. 64, 80335 Munich, Germany</li>
                                </ul>
                            </div>
                            <p class="acoustics">
                                Acoustics <span>2024</span>, 6(3), 730-753; <a
                                    href="https://doi.org/10.3390/acoustics6030040">https://doi.org/10.3390/acoustics6030040</a>
                            </p>
                            <p class="times">
                                Submission received: <span> 12 April 2024 / Revised: 28 May 2024 / Accepted: 19 June
                                    2024 /
                                    Published: 31 July 2024</span>
                                <br>
                                (This article belongs to the Special Issue Active Control of Sound and Vibration)
                            </p>
                        </div>
                        <div class="actions">
                            <a href="" download target="_blank" class="action-dow">
                                Download
                            </a>
                            <a href="" class="alt-display">
                                Alt Display
                            </a>

                            <div class="action-icons">
                                <span class="increase">
                                    <img src="../../assets/image/text_increase.png" alt="">
                                </span>
                                <span class="decrease">
                                    <img src="../../assets/image/text_decrease.png" alt="">
                                </span>
                                <span class="qoute">
                                    <img src="../../assets/image/quote-right-solid.png" alt="">
                                </span>
                                <span class="print">
                                    <img src="../../assets/image/print.png" alt="">
                                </span>
                            </div>
                            <div class="share">
                                <span>
                                    Share：
                                </span>
                                <span class="icon">
                                    <img src="../../assets/image/facebook.png" alt="">
                                </span>
                                <span class="icon">
                                    <img src="../../assets/image/tuite.png" alt="">
                                </span>
                                <span class="icon">
                                    <img src="../../assets/image/in.png" alt="">
                                </span>
                                <span class="icon">
                                    <img src="../../assets/image/mastodon.png" alt="">
                                </span>
                                <span class="icon">
                                    <img src="../../assets/image/email-fill.png" alt="">
                                </span>
                            </div>

                        </div>
                        <div class="content">
                            <div class="research">
                                <div class="title">
                                    Abstract
                                </div>
                                <div class="text">
                                    The primary global source of water pollution is industrial and textile dyes. These
                                    industries produce Highly stable organic dyes that are released untreated into
                                    nearby ponds, lakes and rivers. As ZnO nanoparticles (NPs) are inexpensive,
                                    non-toxic, chemically and thermally stable, and have a higher UV absorption
                                    capacity, they are an effective nano-catalyst for removing hazardous contaminants
                                    such as organic and inorganic dyes from wastewater. The green synthesis of
                                    synthesised ZnO NPs, their shape and size, and their photocatalytic effectiveness
                                    against the dye methyl orange are all described in this paper. The emphasis is on
                                    environmentally friendly synthesis of ZnO NPs using plant extracts because the
                                    synthesis process impacts the characteristics and applications of ZnO NPs.
                                    Additionally, based on recently published literature, the shape and size factors
                                    that affect the photocatalytic activity in the degradation of MO dye are
                                    highlighted.
                                </div>
                                <div class="Keywords">
                                    <p>
                                        <span>Keywords：</span>
                                        <a href="">Anthropocene uncanny</a>，
                                        <a href="">climate change</a>，
                                        <a href="">weirding</a>，
                                        <a href="">Flight Behavior</a>
                                    </p>
                                </div>
                                <div class="datas">
                                    <div>
                                        <p>
                                            <img src="../../assets/image/calendar.png" alt="">
                                            <span> Submitted on Jan 17, 2024</span>
                                        </p>

                                        <p>
                                            <img src="../../assets/image/check-circle.png" alt="">
                                            <span>Accepted on Jul 3, 2024</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <img src="../../assets/image/text5wenben.png" alt="">
                                            <span> Published on Aug 1, 2024</span>
                                        </p>

                                        <p>
                                            <img src="../../assets/image/unif052.png" alt="">
                                            <span>Peer Reviewed</span>
                                        </p>
                                        <p>
                                            <img src="../../assets/image/attribution_px_rounded.png" alt="">
                                            <span>CC Attribution 4.0</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="dows">
                                    <p><img src="../../assets/image/eye.png" alt=""><span>196</span></p>
                                    <p><img src="../../assets/image/dow.png" alt=""><span>2248 Downloads</span></p>
                                </div>
                            </div>
                            <div class="research">
                                <div class="title">
                                    1. Introduction
                                </div>
                                <div class="text">
                                    It is becoming more and more difficult to meet the increasing acoustical
                                    requirements of modern passenger
                                    cars (see, e.g., [1]). The reasons for this are the use of lightweight structures
                                    and fuel-saving
                                    technologies (e.g., cylinder-on-demand). To improve the NVH characteristics,
                                    expensive and heavy active and
                                    passive damper systems are used, with additional negative aspects regarding the
                                    packaging inside the car
                                    (see, e.g., [2,3]). This paper focuses on the use of existing electrical drives for
                                    the active reduction of
                                    disturbing noise and vibrations instead of additional components. This is possible
                                    because many electrical
                                    drives in cars are already equipped with power electronics and control units used to
                                    follow a required
                                    torque or speed, and, therefore, these drives may also be employed to generate noise
                                    and vibrations that can
                                    be used as compensation signals in an ANC system. So, it is possible to use existing
                                    hardware for ANC, which
                                    allows for a reduction in the cost and weight of passenger cars. One advantage of
                                    the method presented here
                                    is that it is possible to act directly in the structure-borne sound path and thus
                                    actively damp vibrations
                                    of components before they cause a diffuse airborne sound field. In existing ANC
                                    systems, several
                                    loudspeakers are used to reduce the sound pressure of a diffuse airborne sound
                                    field. This usually requires
                                    several expensive sensors (e.g., microphones) and actuators to accomplish at several
                                    positions in the
                                    vehicle. In Section 3, it is shown that a global reduction in the sound pressure
                                    level in the vehicle is
                                    possible with only one sensor and one actuator. In this paper, as an example, the
                                    EPS motor is used to
                                    actively reduce harmonic disturbance noise at the driver’s ears. This contribution
                                    is based on the work
                                    published in [4]. While [4] shows a reduction in a constant synthetic disturbance
                                    signal under laboratory
                                    conditions, this paper focuses on the reduction in a synthetic disturbance signal in
                                    a real driving
                                    situation, as well as the reduction in a real harmonic disturbance of the combustion
                                    engine, while effects
                                    on the lifetime of the PMSM are not investigated in this context, as this is purely
                                    a feasibility analysis.
                                    This is performed by using a feedforward control structure, which is a widely used
                                    approach in ANC
                                    applications to generate the control signal [5,6,7,8]. In the controller, the
                                    coefficients of a finite
                                    impulse response (FIR) filter are adapted with the filtered-x least mean squares
                                    (FxLMS) algorithm using a
                                    specific error signal [9,10]. Depending on the physical quantity that should be
                                    compensated for, an
                                    accelerometer or a microphone is usually used to provide an error signal to the
                                    adaptive algorithm. The
                                    so-called secondary path 𝑆(𝑧)
                                    describes the transfer path between the output of the control signal and the
                                    measurement signal of the error
                                    sensor [10]. It influences the performance and the stability of the algorithm [9].
                                    To avoid instabilities, a
                                    model of the secondary path is used. Hence, it is common to use a system
                                    identification scheme to minimize
                                    the model errors resulting from time variant parameters of the secondary path
                                    [11,12]. In this case, the
                                    secondary path consists of the electric drive as well as the mechanical transfer
                                    path. As both parts contain
                                    time variant parameters, a plant identification is carried out by using the least
                                    mean squares (LMS)
                                    algorithm. For this purpose, only small changes to the structure of the algorithm,
                                    which is also used in the
                                    controller, are necessary.
                                    This article mainly focuses on the basic principle of using an EPS motor to reduce
                                    harmonic disturbance
                                    noise. Section 2.1 gives a short introduction of the control structure for an EPS
                                    motor. The schematic
                                    overview of the experimental setups and the hardware used are presented in Section
                                    2.2. In Section 2.3, the
                                    implemented ANC algorithm is introduced and the ability of reducing harmonic
                                    disturbances with the EPS motor
                                    using the proposed control structure is investigated. It is shown that at harmonic
                                    excitation, the EPS
                                    system used in this study generates higher harmonics of the fundamental frequency
                                    due to nonlinearities in
                                    the acoustical transfer path. Two methods are proposed for suppressing these higher
                                    harmonics generated by
                                    the EPS system. Finally, the algorithm is investigated under real conditions in
                                    Section 3.
                                </div>

                            </div>
                            <div class="research">
                                <div class="title">
                                    2. Materials and Methods
                                </div>
                                <div class="text">
                                    In steering control, a standard approach is to use a field oriented control (FOC)
                                    for controlling the torque
                                    demand of a 3-phase PMSM. This was already proposed by Blaschke. The concept is to
                                    transform the time
                                    varying quantities of a PMSM into constants using the Clarke Transform and the Park
                                    Transform. As the ANC
                                    algorithm uses this control structure to stimulate the magnetic field of the EPS
                                    motor, this section
                                    provides a short introduction to the basic principle of a FOC.
                                    As can be seen in Figure 1, the 3-phase system is transformed (𝑑/𝑞
                                    (1)into an equivalent 2-phase system with two orthogonal axes (d- and q-axes), where
                                    𝜃
                                    is the electrical angle of the rotor and 𝑖𝑑/𝑞
                                    are the physical currents of the corresponding phases. The abscissa (d-axis) aligns
                                    to the magnetic flux and
                                    the ordinate (q-axis) is orthogonal to it, while the coordinate system is fixed to
                                    the rotor. This leads to
                                    a static, time-independent model of the PMSM. As there is a coupling between the d-
                                    and q-axes for a rotor
                                    angular speed 𝜔≠0
                                    , an additional decoupling network is used. The orthogonality of the two axes allows
                                    for the independent
                                    control of the currents in the d- and q-directions, where the d-current influences
                                    the radial force 𝐹𝑑
                                    and the q-current the tangential force 𝐹𝑞
                                    on the rotor. Two separate proportional–integral (PI) controllers are used to
                                    control each current
                                    component. The steering control function influences the q-component to generate a
                                    torque at the rotor of the
                                    EPS depending on the demanded torque at the steering wheel. The d-component is set
                                    to zero in normal mode,
                                    but it can be used for weakening the magnetic field in the air gap of the machine.
                                    This allows for a higher
                                    angular speed of the rotor due to the induction law. The ANC algorithm adds a signal
                                    to the current
                                    components in the 𝑑/𝑞
                                    -plane to stimulate the magnetic field of the PMSM and to generate vibrations. A
                                    feedforward controller is
                                    used for ANC in order to reduce the influence on the performance and stability of
                                    the existing PI
                                    controllers. This can be seen in Figure 2, where 𝑖𝑑𝑟
                                    and 𝑖𝑞𝑟
                                    are the reference variables for the current controllers, and the parameters 𝑅𝑑/𝑞
                                    and 𝐿𝑑/𝑞
                                    correspond to the resistance and the inductance of the PMSM in the 𝑑/𝑞
                                    -plane. The amplitude and phase of the additional current 𝑖∗𝑑/𝑞
                                    to generate the compensation signal are adapted by an ANC algorithm using a
                                    narrowband-FxLMS (NFxLMS)
                                    algorithm, which is explained in Section 2.3. The additional currents 𝑖∗𝑑/𝑞
                                    are filtered using a feedforward structure to prevent the additional compensation
                                    signal from being
                                    influenced by the current controllers. Both the dynamic behavior of the controller
                                    and the dynamic behavior
                                    of the electrical subsystem of the PMSM are taken into account.
                                    Acoustics 06 00040 g001
                                    Figure 1. Basic principle of the FOC [4] (©2017 IEEE).
                                    Acoustics 06 00040 g002
                                    Figure 2. Control loop in 𝑑/𝑞−
                                    plane. Blue box: model of the electrical subsystem of the PMSM. Green boxes:
                                    decoupling network.
                                </div>

                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
        <a-back-top target-container="#basic-demo" :style="{ position: 'absolute' }" />
    </div>
</template>

<style scoped lang="less">
.page-articel {
    padding: 80px 0;
    background: rgba(255, 250, 249, 1);

    .searchs {
        margin-bottom: 0px;
    }

    .breadcrumb {
        height: 57px;
        line-height: 57px;
        margin-bottom: 40px;

        a {
            display: inline-block;
            color: #101828;
        }
    }

    .articel-showing {
        width: 1240px;
        margin: auto;
    }

    .articles {
        .title {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            color: #1F3C8A;
        }

        .creators {
            margin: 20px 0;
            cursor: pointer;

        }

        .descs {
            ul {
                padding-left: 10px;
            }

            li {
                list-style-type: disc;
                line-height: 25px;
            }
        }

        .acoustics {
            margin: 20px 0;

            span {
                font-weight: 600;
            }

            a {
                font-weight: 600;
            }
        }

        .times {
            margin: 20px 0;

            span {
                font-weight: 600;
            }
        }

    }

    .actions {
        margin-top: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .action-dow {
            display: block;
            height: 45px;
            width: 154px;
            background: rgba(232, 112, 90, 1);
            border: 1px solid rgba(232, 112, 90, 1);
            border-radius: 4px;
            text-align: center;
            line-height: 45px;
            color: #fff;
            font-weight: 600;
            font-style: 14px;
            margin-right: 12px;
        }

        .alt-display {
            display: block;
            height: 45px;
            width: 154px;
            border: 1px solid rgba(232, 112, 90, 1);
            background: #fff;
            border-radius: 4px;
            color: rgba(232, 112, 90, 1);
            line-height: 45px;
            text-align: center;
            font-weight: 600;
            font-style: 14px;
        }

        .action-icons {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 12px;

            span {
                border-right: 1px solid rgba(0, 0, 0, 0.05);
                margin-left: 12px;
                width: 43px;
                height: 45px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

            }

            img {
                width: 20px;
            }
        }

        .share {
            margin-left: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #606060;

            span {
                font-size: 16px;
                line-height: 27px;
            }

            img {
                width: 18px;
            }

            span.icon {
                cursor: pointer;
                display: inline-flex;
                width: 30px;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .right-content {
        .content {
            margin-top: 24px;

            &>div {
                padding: 13px 20px;
                background: #FFFFFF;
                border-radius: 8px;
                margin-bottom: 24px;

                .title {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 30px;
                    border-bottom: 1px solid #C2C2C2;
                    color: #1F3C8A;
                }

                .text {
                    margin-top: 12px;
                    font-size: 14px;
                    line-height: 21px;
                }

                &:last-child {
                    margin-bottom: 0;
                }

                .Keywords {
                    margin-top: 12px;
                    font-size: 14px;
                    line-height: 27px;

                    span {
                        font-weight: 600;
                        color: #1F3C8A;
                    }

                    a {
                        color: #475467;
                        text-decoration: underline;
                        font-weight: 400;
                    }
                }

                .datas {
                    margin-top: 12px;

                    &>div {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        p {
                            margin-right: 32px;
                            display: flex;
                            align-items: center;

                            img {
                                width: 16px;
                                margin-right: 8px;
                            }

                            span {
                                font-size: 14px;
                                line-height: 27.2px;
                            }
                        }

                        &:last-child {
                            margin-top: 7px;
                        }
                    }
                }

                .dows {
                    margin-top: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    p {
                        font-size: 12px;
                        line-height: 24px;
                        font-weight: 600;
                        padding: 0 12px;
                        height: 32px;
                        line-height: 32px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        color: #666666;

                        img {
                            width: 24px;
                            margin-right: 12px;
                        }

                        &:first-child {
                            border-right: 1px solid #666666;
                            padding-left: 0;
                        }
                    }
                }
            }
        }
    }

    .left-content {

        padding: 20px;

        &>div {
            border-radius: 8px;
        }

        &>p.title {
            font-size: 20px;
            line-height: 30px;
            font-weight: 600;
            color: #1F3C8A;
        }

        .btns {
            margin-top: 10px;

            a {
                width: 100%;
                padding: 10px 8px;
                height: 42px;
                border-radius: 4px;
                text-align: center;
                font-size: 14px;
                font-weight: 600;
                border: 1px solid #E8705A;
                background: #fff;
                color: #E8705A;
                box-sizing: border-box;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;

                &:hover {
                    background: #E8705A;
                    color: #fff;
                    border: 1px solid #E8705A;
                }
            }

            a.active {
                background: #E8705A;
                color: #fff;
                border: 1px solid #E8705A;
            }
        }

        .content {
            margin-top: 10px;
            padding: 20px;
            border-radius: 8px;
            background: #fff;

            p.title {
                font-size: 20px;
                line-height: 30px;
                font-weight: 600;
                color: #1F3C8A;
            }

            .academic {
                padding: 20px 0;
                border-bottom: 1px solid #606060;

                .title {
                    font-size: 14px;
                    line-height: 30px;
                    font-weight: 600;
                    color: #1F3C8A;
                    margin-bottom: 10px;
                }

                div {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin-bottom: 10px;

                    span {
                        margin-right: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40px;
                        height: 40px;
                        background: #E8705A;
                        color: #FFFFFF;
                        font-size: 20px;
                        border-radius: 50%;
                    }
                }
            }

            .links {
                ul li {
                    border-bottom: 1px solid #101828;

                    &.no_child {
                        padding: 8px 0;
                        height: 41px;
                        display: flex;
                        align-items: center;
                    }
                }
            }


        }

        .views {
            margin-top: 20px;
            padding: 20px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;

            p {
                color: #101828;
                font-size: 16px;
                font-weight: 600;

                &:last-child {
                    color: #475467;
                    font-weight: 500;
                }
            }

        }

        .contents {
            margin-top: 20px;
            padding: 20px 20px;
            background: #fff;

            .tilte {
                color: #101828;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
            }

            ul {
                padding-left: 20px;

                li {
                    font-size: 14px;
                    line-height: 27px;
                    margin-bottom: 5px;
                    color: #101828;
                    list-style-type: disc;

                    span.rank {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>

<style lang="less">
.author_info {
    background: #fff;
    width: auto;

    .user {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }

    }
}

.arco-collapse-item-header-right {
    padding-left: 0;
}

.arco-collapse-item-header-right+.arco-collapse-item-content {
    background: transparent;
}
</style>