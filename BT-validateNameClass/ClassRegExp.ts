export class ClassRegExp{
    private CLASS_REGEXP: RegExp = /^[ACP][0-9]{4}[G-M]$/;

    public validate(regex:string){
        return this.CLASS_REGEXP.test(regex)
    }
}