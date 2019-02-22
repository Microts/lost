import React, { Component } from 'react'
import Stepper from 'react-stepper-wizard'
import { connect } from 'react-redux'
import actions from 'actions'
import '../forAllComponents/node.scss'
import SelectPipeline from './components/1/SelectPipeline'
import ShowStartPipeline from './components/2/ShowStartPipeline'
import StartPipelineForm from './components/3/StartPipelineForm'
import StartRunPipeline from './components/4/StartPipeline'

import GrayLine from '../forAllComponents/grayLine'

const { pipelineStartSelectTab } = actions

class StartPipeline extends Component {
    constructor(){
        super()
        this.changeCurrentStep = this.changeCurrentStep.bind(this)
    }
    changeCurrentStep(newStep) {
        console.log('---------this.props this.props---------------------------');
        console.log(this.props);
        console.log('------------------------------------');
        this.props.pipelineStartSelectTab(newStep)
    }

    renderContent() {
        switch (this.props.pipelineStart.currentStep) {
            case 0: return (<SelectPipeline />)
            case 1: return (<ShowStartPipeline />)
            case 2: return (<StartPipelineForm />)
            case 3: return (<StartRunPipeline />)
        }
    }


    render() {
        return (
            <div>
                <Stepper
                    stepperData={this.props.pipelineStart}
                    changeCurrentStep={this.changeCurrentStep}
                />
                <GrayLine />
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { pipelineStart: state.pipelineStart }
}
export default connect(
    mapStateToProps,
    { pipelineStartSelectTab }
)(StartPipeline)