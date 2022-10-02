import React, { PureComponent } from "react";
import ReactStarsRating from 'react-awesome-stars-rating';
import "./Home.css";
import {Link} from 'react-router-dom';

class Sample extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        value: 0,
        isEdit: true,
      };
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(value) {
      this.setState({
        value,
        isEdit: false,
        selectedValue: value,
      });
    }
  
    render() {
      const { isEdit, value, selectedValue } = this.state;
  
      return (
        <section>
          <ReactStarsRating
            onChange={this.onChange}
            isEdit={isEdit}
            value={value}
            selectedValue={selectedValue}
          />
          <div>
            <label for="Prefecture">市町村</label>
            <select name="Prefecture">
              <option value="">選択してください</option>
              <optgroup label="ア行">
                <option value="泉川">泉川(イズミカワ)</option>
                <option value="奥行">奥行(オクユキ)</option>
                <option value="尾岱沼">尾岱沼(オダイトウ)</option>
                <option value="尾岱沼潮見町">尾岱沼潮見町(オダイトウシオミチョウ)</option>
                <option value="尾岱沼岬町">尾岱沼岬町(オダイトウミサキチョウ)</option>
                <option value="尾岱沼港町">尾岱沼港町(オダイトウミナトチョウ)</option>
              </optgroup>
              <optgroup label="カ行">
                <option value="上春別">上春別(カミシュンベツ)</option>
                <option value="上春別旭町">上春別旭町(カミシュンベツアサヒチョウ)</option>
                <option value="上春別栄町">上春別栄町(カミシュンベツサカエチョウ)</option>
                <option value="上春別緑町">上春別緑町(カミシュンベツミドリチョウ)</option>
                <option value="上春別南町">上春別南町(カミシュンベツミナミチョウ)</option>
                <option value="上風連">上風連(カミフウレン)</option>
              </optgroup>
              <optgroup label="サ行">
              </optgroup>
              <optgroup label="タ行">
                <option value="大成">大成(タイセイ)</option>
                <option value="床丹(1番地)">床丹(1番地)(トコタン イチバンチ)</option>
                <option value="床丹(その他)">床丹(その他)(トコタン ソノタ)</option>
                <option value="豊原">豊原(トヨハラ)</option>
              </optgroup>
              <optgroup label="ナ行">
                <option value="中春別">中春別(ナカシュンベツ)</option>
                <option value="中春別西町">中春別西町(ナカシュンベツニシチョウ)</option>
                <option value="中春別東町">中春別東町(ナアシュンベツヒガシチョウ)</option>
                <option value="中春別南町">中春別南町(ナカシュンベツミナミチョウ)</option>
                <option value="中西別">中西別(ナカニシベツ)</option>
                <option value="中西別朝日町">中西別朝日町(ナカニシベツアサヒチョウ)</option>
                <option value="中西別光町">中西別光町(ナカニシベツヒカリチョウ)</option>
                <option value="中西別光町本町">中西別本町(ナカニシベツホンマチ)</option>
                <option value="中西別緑町">中西別緑町(ナカニシマチミドリチョウ)</option>
                <option value="西春別">西春別(ニシシュンベツ)</option>
                <option value="西春別駅前曙町">西春別駅前曙町(ニシシュンベツエキマエアケボノチョウ)</option>
                <option value="西春別駅前柏町">西春別駅前柏町(ニシシュンベツエキマエカシワチョウ)</option>
                <option value="西春別駅前寿町">西春別駅前寿町(ニシシュンベツエキマエコトブキチョウ)</option>
                <option value="西春別駅前栄町">西春別駅前栄町(ニシシュンベツエキマエサカエチョウ)</option>
                <option value="西春別駅前錦町">西春別駅前錦町(ニシシュンベツエキマエニシキチョウ)</option>
                <option value="西春別駅前西町">西春別駅前西町(ニシシュンベツエキマエニシチョウ)</option>
                <option value="西春別清川町">西春別清川町(ニシシュンベツキヨカワチョウ)</option>
                <option value="西春別幸町">西春別幸町(ニシシュンベツサイワイチョウ)</option>
                <option value="西春別昭栄町">西春別昭栄町(ニシシュンベツショウエイチョウ)</option>
                <option value="西春別本久町">西春別本久町(ニシシュンベツホンキュウチョウ)</option>
                <option value="西春別宮園町">西春別宮園町(ニシシュンベツミヤゾノチョウ)</option>
                <option value="野付">野付(ノッケ)</option>
              </optgroup>
              <optgroup label="ハ行">
                <option value="走古丹">走古丹(ハシリコタン)</option>
                <option value="別海">別海(ベツカイ)</option>
                <option value="別海旭町">別海旭町(ベツカイアサヒチョウ)</option>
                <option value="別海川上町">別海川上町(ベツカイカワカミチョウ)</option>
                <option value="別海寿町">別海寿町(ベツカイコトブキチョウ)</option>
                <option value="別海新栄町">別海新栄町(ベツカイシンエイチョウ)</option>
                <option value="別海鶴舞町">別海鶴舞町(ベツカイツルマイチョウ)</option>
                <option value="別海常磐町">別海常磐町(ベツカイトキワチョウ)</option>
                <option value="別海西本町">別海西本町(ベツカイニシホンマチ)</option>
                <option value="別海緑町">別海緑町(ベツカイミドリマチ)</option>
                <option value="別海宮舞町">別海宮舞町(ベツカイミヤマイチョウ)</option>
                <option value="本別海">本別海(ベッカイ)</option>
                <option value="本別">本別(ホンベツ)</option>
              </optgroup>
              <optgroup label="マ行">
                <option value="美原">美原(ミハラ)</option>
              </optgroup>
              <optgroup label="ヤ行">
                <option value="矢臼別(40の1番地,41の2番地)">矢臼別(40の1番地,41の2番地)(ヤウスベツ 40ノ1バンチ、41ノ2バンチ)</option>
                <option value="矢臼別(その他)">矢臼別(その他)(ヤウスベツ ソノタ)</option>
              </optgroup>


            </select>
          </div>
          <div>Selected value: {selectedValue}</div>
          <div className="centering-btn">
                <Link to={'/RateSmell'} className="btn btn--green btn--radius">送信</Link>
          </div>
          <br></br>
          <div className="centering-btn">
                <Link to={'/'} className="btn btn--blue btn--radius">ホームに戻る</Link>
          </div>
        </section>
      );
    }
  }
  
  export default Sample;