<template>
    <div id="user-page" v-if="userInfoIsEmpty">
        <div class="avater">
            <img src="../assets/img/top_bg.png" class="avater-box" />
            <div class="avater-info">
                <div class="avater-info-box">
                    <div class="avater-info-user-name">
                        {{ userInfo.userName || '--' }}
                    </div>
                    <div class="avater-info-user-vip">VIP</div>
                </div>
                <div class="avater-info-detail">欢迎来到鹰眼诊股</div>
            </div>
        </div>
        <div class="vip-card">
            <div class="vip-card-icon"></div>
            <div class="vip-card-text">开通VIP会员</div>
            <div class="vip-card-btn">立即开通</div>
        </div>
        <div class="list">
            <div
                class="list-box"
                v-for="(list, index) in listData"
                :key="index"
            >
                <img :src="list.icon" class="list-box-icon" />

                <div class="list-box-title" v-text="list.title"></div>

                <div class="list-box-text" v-if="list.title == '手机号码'">
                    {{ userInfo.mobile }}
                </div>
                <div class="list-box-text" v-else v-text="list.text"></div>
                <div class="list-box-next"></div>
            </div>
            <a-button
                size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                @click="logout"
            >
                退出
            </a-button>
        </div>

        <div class="shadow"></div>
    </div>
</template>
<script>
    import global_url from '@/App';
    export default {
        data() {
            return {
                userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
                listData: [
                    {
                        icon: require('../assets/img/user-mine.png'),
                        title: '我的订单',
                        text: '身份证信息已完善',
                    },
                    {
                        icon: require('../assets/img/user-phone.png'),
                        title: '手机号码',
                        text: '',
                    },
                    {
                        icon: require('../assets/img/user-gp.png'),
                        title: '我的自选股',
                        text: '',
                    },
                    {
                        icon: require('../assets/img/user-date.png'),
                        title: 'VIP到期日期',
                        text: '',
                    },
                    {
                        icon: require('../assets/img/user-qy.png'),
                        title: 'VIP权益',
                        text: '',
                    },
                ],
            };
        },
        computed: {
            userInfoIsEmpty() {
                return true;
                if (
                    this.userInfo == null ||
                    this.userInfo.token == null ||
                    this.userInfo.token == ''
                ) {
                    console.log('computed', false);
                    return false;
                } else {
                    console.log('computed', true);
                    return true;
                }
            },
        },
        created() {},

        activated() {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (
                userInfo == null ||
                userInfo == '' ||
                userInfo == 'default' ||
                userInfo.token === '' ||
                userInfo.userId === ''
            ) {
                // this.$router.push(`/login`);
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('userInfo');
                // this.$router.push({ path: "login"});
            },
        },
    };
</script>
<style lang="scss" scoped>
    #user-page {
        .avater {
            width: 100%;
            height: 110px;
            display: inline-flex;
            align-items: center;

            &-box {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                margin-left: 16px;
            }

            &-info {
                margin-left: 16px;

                &-box {
                    display: inline-flex;
                    margin-top: 6px;
                    justify-content: center;
                    align-items: center;
                }

                &-user-name {
                    font-size: 20px;
                    font-weight: bold;
                    color: #333333;
                }

                &-user-vip {
                    width: 28px;
                    height: 16px;
                    background: #fdca35;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    color: #333333;
                    text-align: center;
                    line-height: 16px;
                    margin-left: 10px;
                }

                &-detail {
                    font-size: 12px;
                    font-weight: 500;
                    color: #999999;
                }
            }
        }

        .vip-card {
            margin: 0 16px;
            width: calc(100% - 32px);
            height: 62px;
            border-radius: 15px 15px 0px 0px;
            background-image: url(../assets/img/top_bg.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            display: inline-flex;
            align-items: center;

            &-icon {
                width: 24px;
                height: 24px;
                background-image: url(../assets/img/vip-icon.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin-left: 18px;
            }

            &-text {
                font-size: 16px;
                font-weight: 500;
                color: #ffffff;
                width: 60%;
                margin-left: 6px;
            }

            &-btn {
                width: 20%;
                height: 28px;
                background: #ffffff;
                border-radius: 14px;
                text-align: center;
                line-height: 28px;
                font-size: 12px;
                font-weight: 600;
                color: #3973f7;
            }
        }

        .list {
            box-shadow: 0px 1px 7px 0px rgba(3, 23, 27, 0.15);
            border-radius: 14px 14px 0px 0px;
            padding: 10px 16px 70px 16px;
            z-index: 3;
            &-box {
                height: 60px;
                display: inline-flex;
                align-items: center;
                width: 100%;

                &-icon {
                    width: 22px;
                    height: 22px;
                    margin-right: 4%;
                }

                &-title {
                    font-size: 16px;
                    font-weight: 500;
                    color: #333333;
                    width: 46%;
                }

                &-text {
                    font-size: 12px;
                    font-weight: 500;
                    color: #999999;
                    width: 36%;
                    margin-right: 5%;
                    text-align: right;
                }

                &-next {
                    background-image: url(../assets/img/next-icon.png);
                    width: 6px;
                    height: 12px;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
        }
        .shadow {
            width: 100%;
            height: 10px;
            background-color: #ffffff;
            margin-top: -2px;
            z-index: 4;
        }
    }

    #user-login {
        .user-layout-login {
            label {
                font-size: 14px;
            }

            .getCaptcha {
                display: block;
                width: 100%;
                height: 40px;
            }

            .forge-password {
                font-size: 14px;
            }

            .v-code-img {
                height: 40px;
                float: right;
                margin-top: 2px;
                border-radius: 5px;
                cursor: pointer;
                opacity: 0.6;
                filter: alpha(opacity=60);
            }

            button.login-button {
                padding: 0 15px;
                font-size: 16px;
                height: 40px;
                width: 100%;
                width: calc(100% - 5px);
            }

            .user-login-other {
                text-align: left;
                margin-top: 24px;
                line-height: 22px;

                .item-icon {
                    font-size: 24px;
                    color: rgba(0, 0, 0, 0.2);
                    margin-left: 16px;
                    vertical-align: middle;
                    cursor: pointer;
                    transition: color 0.3s;

                    &:hover {
                        color: #1890ff;
                    }
                }

                .register {
                    float: right;
                }
            }
        }
    }
</style>
