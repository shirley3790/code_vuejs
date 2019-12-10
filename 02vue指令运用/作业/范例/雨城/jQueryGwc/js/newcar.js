(() => {
    const vm = new Vue({
        el: '#app',
        data: {
            digi: [{
                    shop: '搜猎人艺术生活',
                    goods: [{
                            gid: 1,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 980,
                            gpic: './images/1.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        },
                        {
                            gid: 2,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 780,
                            gpic: './images/2.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        },
                        {
                            gid: 3,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 180,
                            gpic: './images/3.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        }
                    ],
                    sec: false,
                    sid: 11
                },
                {
                    shop: '卷卷旗舰店',
                    goods: [{
                            gid: 4,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 1980,
                            gpic: './images/4.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        },
                        {
                            gid: 5,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 480,
                            gpic: './images/5.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        }
                    ],
                    sec: false,
                    sid: 21
                },
                {
                    shop: 'qf旗舰店',
                    goods: [{
                            gid: 6,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 880,
                            gpic: './images/1.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        },
                        {
                            gid: 7,
                            gname: '夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男',
                            gprice: 580,
                            gpic: './images/4.png',
                            gcount: 1,
                            isok: true,
                            issel: false
                        }
                    ],
                    sec: false,
                    sid: 31
                }
            ],
            issec: false,
            isbuy: false
        },
        methods: {
            cut(index, idx) {
                // console.log(index);
                // console.log(idx);
                if (this.digi[index].goods[idx].gcount == 1) {
                    this.digi[index].goods[idx].isok = true;
                    return;
                };
                this.digi[index].goods[idx].gcount--;
            },
            add(index, idx) {
                // console.log(index);
                // console.log(idx);
                this.digi[index].goods[idx].isok = false;
                this.digi[index].goods[idx].gcount++;
            },
            del(index, idx) {
                this.digi[index].goods.splice(idx, 1);
            },
            sonsel(index, idx) {
                this.digi[index].goods[idx].issel = !this.digi[index].goods[idx].issel;
                // console.log(this.digi[index].goods[idx].issel);

                //控制店铺复选框
                let yes = this.digi[index].goods.every(item => item.issel == true);
                if (yes) {
                    this.digi[index].sec = true;
                    // this.isbuy = true;
                };
                if (this.digi[index].goods[idx].issel == false) {
                    this.digi[index].sec = false;
                    // this.isbuy = false;
                };

                //控制结算的样式
                let buy = this.digi.some(item => item.goods.some(i => i.issel == true));
                if (buy) {
                    this.isbuy = true;
                } else {
                    this.isbuy = false;
                };
            },
            allsel(index) {
                //点击店铺复选框，控制下面商品全选
                this.digi[index].sec = !this.digi[index].sec;
                if (this.digi[index].sec) {
                    this.digi[index].goods.forEach(item => {
                        item.issel = true;
                    });
                } else {
                    this.digi[index].goods.forEach(item => {
                        item.issel = false;
                    });
                };

                //控制最终全选
                let yes = this.digi.every(item => item.sec == true);
                if (yes) {
                    this.issec = true;
                } else {
                    this.issec = false;
                }

            },
            wholesel() {
                //控制店铺已经商品的全选
                this.issec = !this.issec;
                if (this.issec) {
                    this.digi.forEach(item => {
                        item.sec = true;
                        item.goods.forEach(i => i.issel = true);
                    });
                } else {
                    this.digi.forEach(item => {
                        item.sec = false;
                        item.goods.forEach(i => i.issel = false);
                    });
                }
            }
        },
        computed: {
            total() {
                let all = [];
                this.digi.forEach(item => {
                    item.goods.forEach((i, idx) => {
                        if (i.issel == true) {
                            all.push(i);
                        }
                    })
                });
                let num = all.length;
                let money = 0;
                all.forEach(item => {
                    money += (item.gcount * item.gprice);
                });
                return {
                    num: num,
                    money: money.toFixed(2)
                };

            }
        }
    })
})()