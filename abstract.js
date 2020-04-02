var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyProject = /** @class */ (function () {
    function MyProject() {
        this.projectName = null;
        this.projectType = null;
        this.projectDuration = null;
    }
    MyProject.prototype.companyProfile = function (companyName) {
        companyName = companyName;
        return companyName;
    };
    return MyProject;
}());
var ItProject = /** @class */ (function (_super) {
    __extends(ItProject, _super);
    function ItProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItProject.prototype.getProjct = function (projectName, projectType, projectDuration) {
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectDuration = projectDuration;
        console.log(projectName + "\n" + projectType + "\n" + projectDuration);
    };
    return ItProject;
}(MyProject));
var IP = new ItProject();
IP.getProjct("AMS", "Assessment Managment", "1 year");
var MP = IP.companyProfile("Manipal Global Education Service");
console.log(MP);
