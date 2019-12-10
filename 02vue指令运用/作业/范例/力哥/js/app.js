;
(function () {
    let vm = new Vue({
        el: "#car",
        data: {
            delidx1: 0,
            delidx2: 0,
            deldisplay: false,
            goods: [{
                shopname: "搜猎人艺术生活",
                shopid: 1,
                shopselect: false,
                // 删除的下标
                ordercontent: [{
                        gid: 1,
                        gimg: "./images/1.png",
                        gtext: "夏季男士迷彩无袖T恤1",
                        gnum: 1,
                        maxnum: 10,
                        gselect: false,
                        price: "180"
                    }, {
                        gid: 2,
                        gimg: "./images/2.png",
                        gtext: "夏季男士迷彩无袖T恤2",
                        gnum: 1,
                        maxnum: 5,
                        gselect: false,
                        price: "280"
                    },
                    {
                        gid: 3,
                        gimg: "./images/3.png",
                        gtext: "夏季男士迷彩无袖T恤3",
                        gnum: 1,
                        maxnum: 8,
                        gselect: false,
                        price: "380"
                    }
                ]
            }, {
                shopname: "卷卷旗舰店",
                shopid: 2,
                shopselect: false,
                ordercontent: [{
                    gid: 4,
                    gimg: "./images/4.png",
                    gtext: "夏季男士迷彩无袖T恤4",
                    gnum: 1,
                    maxnum: 6,
                    gselect: false,
                    price: "580"
                }, {
                    gid: 5,
                    gimg: "./images/5.png",
                    gtext: "夏季男士迷彩无袖T恤5",
                    gnum: 1,
                    maxnum: 3,
                    gselect: true,
                    price: "680"
                }]
            }]
        },
        methods: {
            // 勾选店铺=>勾选商品
            shopall(idx) {
                this.goods[idx].shopselect = !this.goods[idx].shopselect;
                this.goods[idx].ordercontent.forEach(item => {
                    item.gselect = this.goods[idx].shopselect;
                });
            },
            // 勾选商品=>勾选店铺
            goodsel(idx, idx1) {
                this.goods[idx].ordercontent[idx1].gselect = !this.goods[idx].ordercontent[idx1].gselect;
                let istrue = this.goods[idx].ordercontent.every(item => {
                    return item.gselect;
                });
                // console.log(istrue);
                this.goods[idx].shopselect = istrue;
            },
            // 删除
            rmgoods(idx, idx1) {
                // let issure = confirm("确定删除？");
                // if (issure) {
                //     this.goods[idx].ordercontent.splice(idx1, 1);
                // }
                // // 如果没有商品，删除店铺
                // if (this.goods[idx].ordercontent.length == 0) {
                //     this.goods.splice(idx, 1);
                // }
                this.deldisplay = true;
                this.delidx1 = idx;
                this.delidx2 = idx1;
            },
            // 确定删除
            rmgoodsyes() {
                this.goods[this.delidx1].ordercontent.splice(this.delidx2, 1);
                // 如果没有商品，删除店铺
                if (this.goods[this.delidx1].ordercontent.length == 0) {
                    this.goods.splice(this.delidx1, 1);
                }
                this.deldisplay = false;
            },
            // 取消删除/关闭弹出框
            rmgoodsno() {
                this.deldisplay = false;
            }
        },
        computed: {
            //全选
            allsel: {
                get() {
                    return this.goods.every(item => {
                        return item.shopselect;
                    })
                },
                set(val) {
                    this.goods.forEach(item => {
                        item.shopselect = val;
                    });
                    this.goods.forEach(item => {
                        item.ordercontent.forEach(item => {
                            // console.log(item);
                            item.gselect = val;
                        });
                    });
                }
            },
            // 结算
            sum() {
                let newarr = [];
                // 找到已勾选的商品
                this.goods.forEach(item => {
                    item.ordercontent.forEach(item => {
                        if (item.gselect) {
                            newarr.push(item);
                        }
                    });
                });
                // console.log(newarr);
                //遍历已勾选商品，并结算
                let totalprice = 0;
                newarr.forEach(item => {
                    totalprice += item.gnum * item.price;
                });
                return totalprice;
            },
            // 已选商品数量
            totalsel() {
                let newarr = [];
                // 找到已勾选的商品
                this.goods.forEach(item => {
                    item.ordercontent.forEach(item => {
                        if (item.gselect) {
                            newarr.push(item);
                        }
                    });
                });
                //计算总数量
                let totalsel = 0;
                newarr.forEach(item => {
                    totalsel += item.gnum;
                });
                return totalsel;
            }
        }
    });

})();