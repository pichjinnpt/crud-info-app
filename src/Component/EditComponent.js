import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Form.css';

class EditComponent extends React.Component{
    handlesubmit = (event) => {
        event.preventDefault();
        if(this.getMobileNo == null){
            this.getMobileNo = this.props.info.mobileno;
        }
        if(this.getGender == null){
            this.getGender = this.props.info.gender;
        }

        const ntitle = this.getTitle.value;
        const nfirstname = this.getFirstName.value;
        const nlastname = this.getLastName.value;
        const nbirthday = this.getBirthday.value;
        const nnation = this.getNationality.value;
        const ncitizenid = this.getCitizenID.value;
        const ngender = this.getGender;
        const nmobileno = this.getMobileNo;
        const npassportno = this.getPassportNo.value;
        const nexpectedsalary = this.getExpectedSalary.value;
        const data = {
            ntitle,
            nfirstname,
            nlastname,
            nbirthday,
            nnation,
            ncitizenid,
            ngender,
            nmobileno,
            npassportno,
            nexpectedsalary
        }

        this.props.dispatch({   
            type: 'UPD_INFO', 
            id: this.props.info.id,
            data: data
        });
    }

    render(){
        return(
            <div>
            <form onSubmit = {this.handlesubmit} >
            <div className='container container-style-update' id='info-form'>
                <h1>Personal Information</h1>
                <div className='row' id = 'row1'>
                    <div className = 'col-sm-2'>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label font-style ">Title:</label>
                            <div className="col-md-9">
                                <select required className = 'form-control font-style' id="title" defaultValue ={this.props.info.title} ref = {(input)=> this.getTitle = input}>
                                    <option value="" disabled selected>Title</option>
                                    <option value="Mr">Mr.</option>
                                    <option value="Ms/Mrs">Ms./Mrs.</option>
                                </select>
                            </div>
                        </div>
                    </div> 
                    <div className = 'col-sm-5'>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label font-style">Firstname:</label>
                            <div className="col-md-10">
                                <input required type="text" className="form-control validate setuppercase" id="firstname" pattern="[a-zA-Z]{1,}" title="Name contains Alphabets only" defaultValue ={this.props.info.firstname} ref = {(input)=> this.getFirstName = input} />
                                <label className='font-style' for="firstname">Required</label>
                            </div>
                        </div>
                    </div>  
                    <div className = 'col-sm-5'>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label font-style">Lastname:</label>
                            <div className="col-md-10">
                                <input required type="text" className="form-control validate setuppercase" id="lastname" pattern="[a-zA-Z]{1,}" title="Name contains Alphabets only" defaultValue ={this.props.info.lastname} ref = {(input)=> this.getLastName = input} />
                                <label className='font-style' for="lastname">Required</label>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='row' id = 'row2'>
                    <div className = 'col-md-4'>
                        <div className="form-group row">
                            <label className="col-3 col-form-label font-style">Birthday:</label>
                            <div className="col-9">
                                <Form.Control className = 'validate' required type="date" name="dob" placeholder="Date of Birth" max={new Date()} defaultValue ={this.props.info.birthday} ref = {(input)=> this.getBirthday = input} />
                                <label className='font-style' for="dob">Required</label>
                            </div>
                        </div>
                    </div>  
                    <div className = 'col-md-8'>
                        <div className="form-group row">
                            <label className="col-2 col-form-label font-style">Nationality:</label>
                            <div className = 'col-10 class="input-field"'>
                                <select className = 'form-control' name="nationality" defaultValue ={this.props.info.nation} ref = {(input)=> this.getNationality = input}>
                                    <option value="" disabled selected>-- select one --</option>
                                    <option value="afghan">Afghan</option>
                                    <option value="albanian">Albanian</option>
                                    <option value="algerian">Algerian</option>
                                    <option value="american">American</option>
                                    <option value="andorran">Andorran</option>
                                    <option value="angolan">Angolan</option>
                                    <option value="antiguans">Antiguans</option>
                                    <option value="argentinean">Argentinean</option>
                                    <option value="armenian">Armenian</option>
                                    <option value="australian">Australian</option>
                                    <option value="austrian">Austrian</option>
                                    <option value="azerbaijani">Azerbaijani</option>
                                    <option value="bahamian">Bahamian</option>
                                    <option value="bahraini">Bahraini</option>
                                    <option value="bangladeshi">Bangladeshi</option>
                                    <option value="barbadian">Barbadian</option>
                                    <option value="barbudans">Barbudans</option>
                                    <option value="batswana">Batswana</option>
                                    <option value="belarusian">Belarusian</option>
                                    <option value="belgian">Belgian</option>
                                    <option value="belizean">Belizean</option>
                                    <option value="beninese">Beninese</option>
                                    <option value="bhutanese">Bhutanese</option>
                                    <option value="bolivian">Bolivian</option>
                                    <option value="bosnian">Bosnian</option>
                                    <option value="brazilian">Brazilian</option>
                                    <option value="british">British</option>
                                    <option value="bruneian">Bruneian</option>
                                    <option value="bulgarian">Bulgarian</option>
                                    <option value="burkinabe">Burkinabe</option>
                                    <option value="burmese">Burmese</option>
                                    <option value="burundian">Burundian</option>
                                    <option value="cambodian">Cambodian</option>
                                    <option value="cameroonian">Cameroonian</option>
                                    <option value="canadian">Canadian</option>
                                    <option value="cape verdean">Cape Verdean</option>
                                    <option value="central african">Central African</option>
                                    <option value="chadian">Chadian</option>
                                    <option value="chilean">Chilean</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="colombian">Colombian</option>
                                    <option value="comoran">Comoran</option>
                                    <option value="congolese">Congolese</option>
                                    <option value="costa rican">Costa Rican</option>
                                    <option value="croatian">Croatian</option>
                                    <option value="cuban">Cuban</option>
                                    <option value="cypriot">Cypriot</option>
                                    <option value="czech">Czech</option>
                                    <option value="danish">Danish</option>
                                    <option value="djibouti">Djibouti</option>
                                    <option value="dominican">Dominican</option>
                                    <option value="dutch">Dutch</option>
                                    <option value="east timorese">East Timorese</option>
                                    <option value="ecuadorean">Ecuadorean</option>
                                    <option value="egyptian">Egyptian</option>
                                    <option value="emirian">Emirian</option>
                                    <option value="equatorial guinean">Equatorial Guinean</option>
                                    <option value="eritrean">Eritrean</option>
                                    <option value="estonian">Estonian</option>
                                    <option value="ethiopian">Ethiopian</option>
                                    <option value="fijian">Fijian</option>
                                    <option value="filipino">Filipino</option>
                                    <option value="finnish">Finnish</option>
                                    <option value="french">French</option>
                                    <option value="gabonese">Gabonese</option>
                                    <option value="gambian">Gambian</option>
                                    <option value="georgian">Georgian</option>
                                    <option value="german">German</option>
                                    <option value="ghanaian">Ghanaian</option>
                                    <option value="greek">Greek</option>
                                    <option value="grenadian">Grenadian</option>
                                    <option value="guatemalan">Guatemalan</option>
                                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                                    <option value="guinean">Guinean</option>
                                    <option value="guyanese">Guyanese</option>
                                    <option value="haitian">Haitian</option>
                                    <option value="herzegovinian">Herzegovinian</option>
                                    <option value="honduran">Honduran</option>
                                    <option value="hungarian">Hungarian</option>
                                    <option value="icelander">Icelander</option>
                                    <option value="indian">Indian</option>
                                    <option value="indonesian">Indonesian</option>
                                    <option value="iranian">Iranian</option>
                                    <option value="iraqi">Iraqi</option>
                                    <option value="irish">Irish</option>
                                    <option value="israeli">Israeli</option>
                                    <option value="italian">Italian</option>
                                    <option value="ivorian">Ivorian</option>
                                    <option value="jamaican">Jamaican</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="jordanian">Jordanian</option>
                                    <option value="kazakhstani">Kazakhstani</option>
                                    <option value="kenyan">Kenyan</option>
                                    <option value="kittian and nevisian">Kittian and Nevisian</option>
                                    <option value="kuwaiti">Kuwaiti</option>
                                    <option value="kyrgyz">Kyrgyz</option>
                                    <option value="laotian">Laotian</option>
                                    <option value="latvian">Latvian</option>
                                    <option value="lebanese">Lebanese</option>
                                    <option value="liberian">Liberian</option>
                                    <option value="libyan">Libyan</option>
                                    <option value="liechtensteiner">Liechtensteiner</option>
                                    <option value="lithuanian">Lithuanian</option>
                                    <option value="luxembourger">Luxembourger</option>
                                    <option value="macedonian">Macedonian</option>
                                    <option value="malagasy">Malagasy</option>
                                    <option value="malawian">Malawian</option>
                                    <option value="malaysian">Malaysian</option>
                                    <option value="maldivan">Maldivan</option>
                                    <option value="malian">Malian</option>
                                    <option value="maltese">Maltese</option>
                                    <option value="marshallese">Marshallese</option>
                                    <option value="mauritanian">Mauritanian</option>
                                    <option value="mauritian">Mauritian</option>
                                    <option value="mexican">Mexican</option>
                                    <option value="micronesian">Micronesian</option>
                                    <option value="moldovan">Moldovan</option>
                                    <option value="monacan">Monacan</option>
                                    <option value="mongolian">Mongolian</option>
                                    <option value="moroccan">Moroccan</option>
                                    <option value="mosotho">Mosotho</option>
                                    <option value="motswana">Motswana</option>
                                    <option value="mozambican">Mozambican</option>
                                    <option value="namibian">Namibian</option>
                                    <option value="nauruan">Nauruan</option>
                                    <option value="nepalese">Nepalese</option>
                                    <option value="new zealander">New Zealander</option>
                                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                                    <option value="nicaraguan">Nicaraguan</option>
                                    <option value="nigerien">Nigerien</option>
                                    <option value="north korean">North Korean</option>
                                    <option value="northern irish">Northern Irish</option>
                                    <option value="norwegian">Norwegian</option>
                                    <option value="omani">Omani</option>
                                    <option value="pakistani">Pakistani</option>
                                    <option value="palauan">Palauan</option>
                                    <option value="panamanian">Panamanian</option>
                                    <option value="papua new guinean">Papua New Guinean</option>
                                    <option value="paraguayan">Paraguayan</option>
                                    <option value="peruvian">Peruvian</option>
                                    <option value="polish">Polish</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="qatari">Qatari</option>
                                    <option value="romanian">Romanian</option>
                                    <option value="russian">Russian</option>
                                    <option value="rwandan">Rwandan</option>
                                    <option value="saint lucian">Saint Lucian</option>
                                    <option value="salvadoran">Salvadoran</option>
                                    <option value="samoan">Samoan</option>
                                    <option value="san marinese">San Marinese</option>
                                    <option value="sao tomean">Sao Tomean</option>
                                    <option value="saudi">Saudi</option>
                                    <option value="scottish">Scottish</option>
                                    <option value="senegalese">Senegalese</option>
                                    <option value="serbian">Serbian</option>
                                    <option value="seychellois">Seychellois</option>
                                    <option value="sierra leonean">Sierra Leonean</option>
                                    <option value="singaporean">Singaporean</option>
                                    <option value="slovakian">Slovakian</option>
                                    <option value="slovenian">Slovenian</option>
                                    <option value="solomon islander">Solomon Islander</option>
                                    <option value="somali">Somali</option>
                                    <option value="south african">South African</option>
                                    <option value="south korean">South Korean</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="sri lankan">Sri Lankan</option>
                                    <option value="sudanese">Sudanese</option>
                                    <option value="surinamer">Surinamer</option>
                                    <option value="swazi">Swazi</option>
                                    <option value="swedish">Swedish</option>
                                    <option value="swiss">Swiss</option>
                                    <option value="syrian">Syrian</option>
                                    <option value="taiwanese">Taiwanese</option>
                                    <option value="tajik">Tajik</option>
                                    <option value="tanzanian">Tanzanian</option>
                                    <option value="thai">Thai</option>
                                    <option value="togolese">Togolese</option>
                                    <option value="tongan">Tongan</option>
                                    <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                    <option value="tunisian">Tunisian</option>
                                    <option value="turkish">Turkish</option>
                                    <option value="tuvaluan">Tuvaluan</option>
                                    <option value="ugandan">Ugandan</option>
                                    <option value="ukrainian">Ukrainian</option>
                                    <option value="uruguayan">Uruguayan</option>
                                    <option value="uzbekistani">Uzbekistani</option>
                                    <option value="venezuelan">Venezuelan</option>
                                    <option value="vietnamese">Vietnamese</option>
                                    <option value="welsh">Welsh</option>
                                    <option value="yemenite">Yemenite</option>
                                    <option value="zambian">Zambian</option>
                                    <option value="zimbabwean">Zimbabwean</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' id = 'row3'>
                   <div className = 'col-md-10'>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label font-style">CitizenID:</label>
                            <div className="col-md-10">
                                <input type="number" className="form-control" id="citizenid" pattern="[0-9]{13,13}" defaultValue ={this.props.info.citizenid} onChange={this.CheckLength} ref = {(input)=> this.getCitizenID = input} />
                            </div>
                        </div>
                    </div>  
                </div>
                <div className='row' id = 'row4'>
                    <div className = 'col-md-6'>
                        <div className="form-group row">
                            <label className="col-3 col-form-label font-style">Gender:</label>
                            <div className="col-9" >
                                    <label className="col-4 center">
                                        <input class="with-gap col-form-label" name="group1" value = "MALE" type="radio" onChange={gender => this.getGender = 'MALE'}/>
                                        <span className='font-style'>Male</span>
                                    </label>
                                    <label className="col-4 center">
                                        <input class="with-gap col-form-label" name="group1" value = "FEMALE" type="radio" onChange={gender => this.getGender = 'FEMALE'}/>
                                        <span className='font-style'>Female</span>
                                    </label>
                                    <label className="col-4 center">
                                        <input class="with-gap col-form-label" name="group1" value = "UNISEX" type="radio" onChange={gender => this.getGender = 'UNISEX'}/>
                                        <span className='font-style'>Unisex</span>
                                    </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' id = 'row5'>
                    <div className = 'col-md-10'>
                        <div className="form-group row">
                            <label className="col-2 col-form-label font-style">Mobile Phone:</label>
                            <div className='col-10 validate'>
                                <PhoneInput 
                                inputStyle = {{paddingLeft:'50px'}}
                                required = 'true'
                                id="mobileno"
                                country={'th'}
                                value = {this.props.info.mobileno}
                                onChange={phone => this.getMobileNo = phone}
                                />
                                <label className='font-style' for="mobileno">Required</label>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='row' id = 'row6'>
                    <div className = 'col-md-10'>
                        <div className="form-group row">
                            <label className="col-2 col-form-label font-style">Passport No:</label>
                            <div className="col-4">
                                <input type="text" className="form-control setuppercase" id="passport" maxLength = {13} defaultValue ={this.props.info.passportno} ref = {(input)=> this.getPassportNo = input}/>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='row' id = 'row7'>
                    <div className = 'col-md-10'>
                        <div className="form-group row">
                            <label className="col-2 col-form-label font-style">Expected Salary:</label>
                            <div className="input-field col-4">
                                <input required id="edtexpectedsalary" type="number" className="validate" defaultValue ={this.props.info.expectedsalary} ref = {(input)=> this.getExpectedSalary = input}/>
                                <label className='font-style' style={{paddingLeft:'20px'}} for="edtexpectedsalary">Thai Bath</label>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-md-2'>
                        <button class="waves-effect waves-light btn-large submit-style" type="submit" name="action">
                             UPDATE 
                        </button>
                    </div>
                </div>
            </div>
        </form>
            </div>
         );  
    };
}

export default connect()(EditComponent);