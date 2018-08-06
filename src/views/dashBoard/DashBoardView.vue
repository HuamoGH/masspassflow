<template>
  <div id="master-station">
    <el-row type="flex">
      <el-col class="card-container-left" :span="16">
        <el-card shadow="hover" class="box-card" v-for="(item,index) in cardDataNumber" :key="index">
          <div>
            <svg-icon icon-class="equipment" class-name="`equipment`"></svg-icon>
            <span>
              <span>{{item.name}}</span>
              <span>{{item.peopre}}</span>
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-container-right" :span="8">
        <div shadow="hover" class="box-card">
          <div>
            <svg-icon  icon-class="warning" class-name="`warning`"></svg-icon>
            <span>
              <span>{{cardDataString[0].name}}</span>
              <span>{{cardDataString[0].peopre}}</span>
            </span>
          </div>
        </div>
        <div class="area-porsen">
          <div v-for="(item,index) in areaPorsen" :key="index">
            <span>
              <span>{{item.name}}</span>
              <span>{{item.prosen}}</span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
</template>

<script>
// written by luoyingheng August 2018
import SvgIcon from "@/components/SvgIcon";
import {mapState,mapMutations,mapGetters,mapActions} from 'Vuex'

export default {
  name: 'DashBoardView',
  computed:{
    ...mapState({
      cardDataNumber:state=>state.dashboardview.MasterStationData.cardDataNumber,
      cardDataString:state=>state.dashboardview.MasterStationData.cardDataString,
      areaPorsen:state=>state.dashboardview.MasterStationData.areaPorsen
    })
  },
  components:{
    SvgIcon
  }
}
</script>

<style lang="scss">
  #master-station{
    .card-container-left{
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      .box-card{
        width: 47%;
        height: 18rem;
        margin: 1%;
        min-width: 22rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        border:none;
        box-shadow: 0 0 12px 0 #0E2256;
        color:#FFFFFF;
        div{
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 15rem;
          svg{
            flex-shrink: 0;
            margin-left: 10%;
            height: 6rem;
            width: 6rem;
          }
          span{
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: flex-start;
            margin: 1rem;
            span:nth-of-type(1){
              display: block;
              font-size: 1.3rem;
            }
            span:nth-of-type(2){
              display: block;
              font-size: 3.5rem;
            }
          }
        }
      }
      .box-card:nth-of-type(1){
        background-image: linear-gradient(-133deg, #1C6FE6 0%, #3023AE 100%);
        order:1;
        svg{
          fill: #3023AE;
          fill-opacity: 0.1;
          stroke: #FFFFFF;
        }
      }
      .box-card:nth-of-type(2){
        background-image: linear-gradient(-133deg, #C86DD7 0%, #3023AE 100%);
        order:2;
        svg{
           fill: #C86DD7;
           fill-opacity: 0.1;
           stroke: #FFFFFF;
        }
      }
      .box-card:nth-of-type(3){
        background-image: linear-gradient(-133deg, #5FC2BB 0%, #1E5FCD 100%);
        order:3;
        svg{
           fill: #5FC2BB;
           fill-opacity: 0.1;
           stroke: #FFFFFF;
        }
      }
      .box-card:nth-of-type(4){
        font-size:1.8rem;
        background-image: linear-gradient(-133deg, #E4990B 0%, #E95A2D 100%);
        order:4;
        svg{
           fill: #E4990B;
           fill-opacity: 0.1;
           stroke: #FFFFFF;
        }
        span:nth-of-type(2){
          margin-top: 12%;
          font-size: 1.95rem;
        }
      }
    }
    .card-container-right{
      display: flex;
      flex-flow: row wrap;
      height: 100%;
      height: 38rem;
      border-radius: 4px;
      min-width: 22rem;
      background-image: linear-gradient(-45deg, #1C6FE6 0%, #3023AE 100%);
      margin: 1%;
      .box-card{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 16rem;
        color: #FFFFFF;
        border: none;
        box-shadow: 0 0 12px 0 #0E2256;
        border-bottom: 1px solid rgb(196, 194, 194);
        // background-image: linear-gradient(-45deg, #1C6FE6 0%, #3023AE 80%);
        div{
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;
          width: 80%;
          height: 15rem;
          svg{
            flex-grow: 0;
            flex-shrink: 0;
            height: 6rem;
            width: 6rem;
            fill: #1C6FE6;
            fill-opacity: 0.1;
            stroke: #FFFFFF;
          }
          span{
            margin: 10px;
            span:nth-of-type(1){
              display: block;
              font-size: 1.4rem;
            }
            span:nth-of-type(2){
              display: block;
              font-size: 3.2rem;
            }
          }
        }
      }
      .area-porsen{
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        height: 22.1rem;
        div{
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 50%;
          color: #FFFFFF;
          span{
            span:nth-of-type(1){
              display: block;
              font-size: 1.5rem;
            }
            span:nth-of-type(2){
              display: block;
              font-size: 3rem;
            }
          }
        }
      }
    }
  } 
</style>
