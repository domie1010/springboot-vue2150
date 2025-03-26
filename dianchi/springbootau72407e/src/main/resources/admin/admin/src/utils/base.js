const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootau72407e/",
            name: "springbootau72407e",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootau72407e/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的电池销售系统"
        } 
    }
}
export default base
