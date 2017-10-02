'use strict';

//����� ������ �����
var plodAdam={
  name:"����",
  ageMoment:18,
  dateBirth:-18,
  clan:"����",
  parents:[],
  ancestraltree:[],
  childrens:[],
  genome:{},
  resemblanceofFather:0,
  resemblanceofMother:0,
  resemblanceofAncient:1,
  pastMutation:"",
  minSexAge:18,
  maxSexAge:58,
  sexPartners:[],
  alfaDominations:0.75
};

var plodAvraam={
  name:"������",
  ageMoment:20,
  dateBirth:-20,
  clan:"������",
  parents:[],
  ancestraltree:[],
  childrens:[],
  genome:{},
  resemblanceofFather:0,
  resemblanceofMother:0,
  resemblanceofAncient:1,
  pastMutation:"",
  minSexAge:16,
  maxSexAge:70,
  sexPartners:[],
  alfaDominations:0.65
};

var plodEli={
  name:"����",
  ageMoment:15,
  dateBirth:-15,
  clan:"����",
  parents:[],
  ancestraltree:[],
  childrens:[],
  genome:{},
  resemblanceofFather:0,
  resemblanceofMother:0,
  resemblanceofAncient:1,
  pastMutation:"",
  minSexAge:15,
  maxSexAge:63,
  sexPartners:[],
  alfaDominations:0.70
};








// ������ ����������
class Human{
  constructor(foetus) {
    //������� ��������������
    this.name = foetus.name;
    this.ageMoment = foetus.ageMoment;
    this.dateBirth = foetus.dateBirth;
    
    //���������� ��������������
    this.clan = foetus.clan;
    this.parents = foetus.parents;
    this.ancestraltree = foetus.ancestraltree;
    this.childrens = foetus.childrens;
    
    //������������ ��������������
    this.genome = foetus.genome;
    this.resemblanceofFather = foetus.resemblanceofFather;
    this.resemblanceofMother = foetus.resemblanceofMother;
    this.resemblanceofAncient = foetus.resemblanceofAncient;
    this.pastMutation = foetus.pastMutation;
    
    //������� ��������������
    this.minSexAge = foetus.minSexAge;
    this.maxSexAge = foetus.maxSexAge;
    this.sexPartners = foetus.sexPartners;
  }
  //������ ������������ ������� ������(������ ������)
  meiosis(){
    return {};
  }
}


//���������� �/�
class Man extends Human{
  constructor(foetus){
    super(foetus);
    //���������� �� �������� ��������
    this.sex = foetus.sex;
    this.alfaDominations = foetus.alfaDominations; 
  }
}

class Women extends Human{
  constructor(foetus){
    super(foetus);
    //���������� �� �������� ��������
    this.sex = foetus.sex;
    this.untouchability = -2;
    this.foetus = [];
  }
}

//��� ������ �����
var Adam = new Man(plodAdam);
var Eli = new Man(plodEli);
var Avraam = new Man(plodAvraam);
console.log(Adam);
console.log(Eli);
console.log(Avraam);

//�������� ���� �����
var World = {
  years:0,
  humans:[],
  //������ ��������� �� ������� +1��� �������� ���������� ������
  newYear(){
    this.years++;
    for (let human of this.humans) {
      human.ageMoment++;
    }
  }
}

World.humans.push(Adam);
World.humans.push(Eli);
World.humans.push(Avraam);
console.log(World);

var MetatronJournal = {

}

World.newYear();
console.log(World);