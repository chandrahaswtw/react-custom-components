import React, { useState } from "react";
import classes from './Home.module.scss';
import Alert from './../../UI/Alert/Alert';
import ToolTip from './../../UI/ToolTip/ToolTip';
import DropDownForm from './../DropDownForm/DropDownForm';
import TreeView from './../../UI/TreeView/TreeView';
import Tags from './../../UI/Tags/Tags';

const Home = (props) => {

    const [showAlert, setShowAlert] = useState(false);

    const [data, setData]= useState(
        [
            {
                name : "DOMAIN1",
                children : [
                    {name : "SMART"},
                    {name : "PAYNET"}
                ],
                expandable : false
            },
            {
                name : "DOMAIN2",
                children : [
                    {name : "TOKEN"},
                    {name : "METS+"}
                ],
                expandable : false
            }
        ]
    )

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.centrica}>CUSTOM COMPONENTS</h1>
            <hr />
            <div className={classes.centrica}>
                <h2>ALERT</h2>
                <button onClick={() => { setShowAlert(true) }}>SHOW ALERT</button>
                <Alert type="success" show={showAlert} closeHandler={() => { setShowAlert(false) }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla fugit nobis! Ipsam sed, veniam officiis cupiditate modi praesentium mollitia delectus, nostrum quos obcaecati cum nemo voluptas doloremque labore est ducimus quam aliquam, sapiente sit iure inventore reiciendis. Optio incidunt dignissimos numquam quae nobis natus quasi doloribus laboriosam quibusdam ratione, quis architecto unde eligendi ipsa error quisquam perspiciatis beatae vero. Expedita aliquam qui repellat aperiam deleniti exercitationem hic cumque omnis nostrum quasi. Ea quaerat non enim, accusamus porro tenetur unde. Voluptates similique officiis minus. Magnam adipisci tempora dolor cupiditate, iusto ipsum pariatur enim blanditiis placeat ut qui reiciendis facilis consequuntur, quod eaque quibusdam voluptas, nulla neque nostrum quas vero saepe maiores cum. Voluptate temporibus quo nesciunt ab distinctio dolor dicta sed ex, ipsum totam vitae et natus recusandae maxime, animi veniam voluptas nisi repellendus provident! Fugit illum omnis in ut perferendis totam iure vel aut animi aliquid, culpa tempora corrupti, autem soluta nulla cumque nisi. Voluptatem doloribus ex quis, illum in quibusdam molestiae alias ducimus ea, quam molestias unde, repellat praesentium delectus deserunt omnis quos repudiandae ipsam? Officiis totam, quos modi ad, cupiditate magni inventore voluptatum animi perferendis unde in ipsa iure obcaecati iusto porro. Blanditiis, cum at. Expedita quas culpa dignissimos inventore! Impedit, explicabo nobis. Voluptate corporis nisi laborum delectus ullam ipsa beatae soluta tempore repellendus maxime mollitia aliquam quidem esse doloremque, fuga architecto voluptas cumque magnam rerum molestiae totam quis eos ab? Sit in corporis placeat officia provident. Fugit eaque facere est soluta consectetur ea iste quaerat mollitia provident reprehenderit! Et at dolore sequi adipisci, animi sit suscipit eligendi repellendus repudiandae. Quod dolor maiores laborum ullam tempore debitis impedit earum, eius iure, blanditiis omnis quibusdam, reiciendis odit laboriosam. Suscipit in reiciendis perspiciatis commodi neque deserunt fugiat consectetur delectus iste obcaecati consequatur laudantium, repellat ab quis pariatur illo facilis, nam veritatis at necessitatibus explicabo officiis quod maiores corporis. Nulla, consequatur id, est beatae aliquid exercitationem illo nesciunt dicta debitis, ipsa velit assumenda aut sequi rem! Voluptate, similique esse alias ab veniam minus a ex reprehenderit cum nulla sit pariatur? Dolorem illum ullam iure iste neque similique commodi quas dolores quam velit vitae, enim, eum praesentium animi veniam sunt libero deserunt saepe aut tempora tempore quibusdam? Veniam at inventore dolore sint omnis architecto esse iusto voluptatibus? Iure unde debitis eligendi voluptates natus temporibus saepe nemo repellendus nihil deleniti odio accusamus fugit velit maxime sunt expedita, ad, dolorem libero corrupti dolorum aliquid labore. Numquam eius quae molestias, temporibus ex distinctio totam, libero officia, sequi quibusdam exercitationem dolores in voluptate eaque! Necessitatibus quas quis ipsa vel qui fuga obcaecati laborum nulla veniam, sequi mollitia nisi perferendis sunt quasi id porro maiores ad sint in quia cupiditate saepe dolores tempore inventore. Suscipit, enim? Libero alias accusamus a. Sit praesentium quasi distinctio dolore eius nihil labore cupiditate. Quaerat voluptate ea inventore error, aut quod non, dolores maxime quisquam similique deserunt perspiciatis aperiam corporis debitis molestias ad est, delectus doloremque ipsum dolor? Doloremque odio facilis a, maiores distinctio tenetur neque voluptatum magnam tempore. Dicta, dignissimos laborum sequi fugiat reprehenderit necessitatibus fugit iusto nostrum adipisci itaque non molestiae quasi minima quae commodi magni! Officia quis maxime ipsa omnis provident, illum, similique, animi recusandae fugiat natus voluptates quas incidunt dolorem possimus facilis dolor? Atque possimus placeat eum temporibus accusamus nobis reprehenderit soluta at pariatur maiores quae doloremque iure, porro autem magnam repellendus debitis nulla similique dolores veritatis, facilis dolorem! Similique ipsum, illum molestiae facere nulla ducimus nesciunt omnis fuga deserunt architecto dolore? Nihil, similique. Ratione pariatur aspernatur animi fugit non, impedit rem aperiam tempore provident iusto assumenda mollitia consequatur esse repudiandae eligendi? Debitis rem quisquam officia, unde ullam quam similique deleniti voluptate. Ipsam quod quasi culpa praesentium? Placeat fuga iusto laborum alias cumque consectetur facilis perferendis harum numquam, ut asperiores porro molestiae explicabo expedita nesciunt voluptates corporis rerum iure dignissimos iste? Ab eius nam blanditiis minima veritatis aliquid nobis consectetur hic dolor aliquam quo praesentium, iste expedita sed, consequatur adipisci illo pariatur modi provident explicabo facilis similique quia perspiciatis id. Asperiores vel exercitationem quibusdam eum nulla ducimus, culpa commodi cum rem explicabo nobis quo eveniet officia dicta at aliquam et quae minima quis dignissimos blanditiis corporis facere numquam? Ea, maxime, id sunt at reiciendis autem earum tempora possimus labore veritatis quos. Nulla asperiores suscipit praesentium natus unde minus sequi alias dolore obcaecati ipsa provident nesciunt ducimus quae ea quisquam totam, reprehenderit sapiente est cum facilis cumque quia? Recusandae, iste voluptatibus! Et labore quod deserunt incidunt atque cum iusto hic suscipit, reiciendis laboriosam sequi excepturi nostrum officia tempora harum voluptas beatae maiores quidem sit! Magnam laboriosam, blanditiis, dicta officiis quos quia quaerat asperiores molestiae fugit architecto perspiciatis rerum! Voluptatem nulla quasi quis temporibus, doloribus at saepe suscipit quia cupiditate mollitia, iure quo facere ipsam illum corporis assumenda rem repudiandae culpa adipisci? Distinctio, porro soluta earum repudiandae possimus, culpa nisi quos incidunt in tempora placeat molestiae quas odit aut sint laudantium ut quia, tenetur error. Repellendus minus commodi quisquam id animi fugit culpa accusamus quia neque perspiciatis corporis amet dolores debitis porro deleniti cumque, tenetur quo rerum aspernatur officia. Tenetur fuga animi nostrum similique hic soluta doloremque, adipisci corporis incidunt, eligendi beatae explicabo architecto, mollitia sunt ea in praesentium a id quod dolor. Ipsa asperiores mollitia laborum eveniet error delectus assumenda facere? Perferendis nam recusandae aliquam earum, rerum aut velit, reprehenderit cumque vero expedita enim quo adipisci odit? Porro inventore magnam voluptate aliquid unde vel quibusdam labore sint iusto, sunt obcaecati corporis ducimus delectus et quo ipsa. Labore voluptatum veritatis deleniti mollitia vitae corrupti quam dolorem, dolores dolore enim dignissimos natus quod repudiandae neque eligendi consequuntur! Tempora beatae illum, fugiat commodi nobis minima itaque mollitia recusandae molestias libero. Debitis, sapiente? Accusantium esse facere repellendus quas. Accusantium quasi quidem ipsam odio voluptas. Sunt vitae optio doloribus sint, nam quam a doloremque! Doloribus dolore iure magnam a, dolores, amet libero impedit asperiores temporibus non unde, ducimus mollitia aut vel! Eos sed reiciendis ipsam dolor temporibus fuga, ea corporis adipisci repellat voluptatum ducimus, dolorum excepturi asperiores minus ratione, obcaecati porro harum? Eius!</Alert>
                
                <br/> <br/>
                <hr />
            </div>

            <div className={classes.centrica}>
                <h2>TOOLTOP</h2>
                <ToolTip content="Lorem ipsum dolor">HOVER OVER ME</ToolTip>
                <br/> <br/>
                <hr />
            </div>
            <div>
                <h2 className={classes.centrica}>DROPDOWNS</h2>
                <DropDownForm></DropDownForm>
            </div>
            <TreeView data = {data}></TreeView>
            <Tags></Tags>
        </div>
    )
}

export default Home;
