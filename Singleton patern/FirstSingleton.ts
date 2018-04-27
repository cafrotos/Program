//Tạo đối tượng thánh đức chúa trời(là duy nhất :v)

class TheGod{

    private static instance : TheGod;

    private Godname;

    private constructor(name){
        this.Godname = name;
    }

    public static getInstance(NameOfGod){
        if(!TheGod.instance){
            TheGod.instance = new TheGod(NameOfGod);
        }
        
        return TheGod.instance;
    }

}