//Tạo đối tượng thánh đức chúa trời(là duy nhất :v)
class TheGod {
    constructor(name) {
        this.Godname = name;
    }
    static getInstance(NameOfGod) {
        if (!TheGod.instance) {
            TheGod.instance = new TheGod(NameOfGod);
        }
        return TheGod.instance;
    }
}
//# sourceMappingURL=FirstSingleton.js.map