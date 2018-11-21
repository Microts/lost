import { NodeTemplate } from 'pipRoot/l3pfrontend/index'


export default class ScriptStartView {
    constructor(model) {
        let validation = true
        this.html = new NodeTemplate(/*html*/`
                <div class='panel panel-${
                                (model.post.script.arguments === ' ' || model.post.script.arguments === undefined || model.post.script.arguments === null) ?
                                `primary`
                                : `${validation?`success`:`warning`}`
                            } 
                            custom-node'>
                    <div class='panel-heading '>
                        <i class='fa fa-rocket fa-2x pull-left'></i>
                        <h class='panel-title'>Script</h>
                    </div>
                    <div class='panel-body'>
                        <table class='table table-borderless'>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>${model.script.name}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`)
        // The parent node gets defined after adding the node to
        // the graph by the nodes presenter.
        // all view events will be delegated to the parent node.
        this.parentNode = undefined
    }

}