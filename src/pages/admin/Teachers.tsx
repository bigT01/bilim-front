import AdminIndex from "./index";
import './styles/adminTeachers.scss'
import {Edit, UserAdd, UserRemove} from "../../components/assets/MainAssets";

const Teachers = () =>{
    return(
        <AdminIndex>
            <div className="admin_teachers">

                <div className="table_wrapper">
                    <div className="header">
                        <div className="search_wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9268 17.0401L20.4 20.4001M19.28 11.4401C19.28 15.77 15.7699 19.2801 11.44 19.2801C7.11006 19.2801 3.59998 15.77 3.59998 11.4401C3.59998 7.11019 7.11006 3.6001 11.44 3.6001C15.7699 3.6001 19.28 7.11019 19.28 11.4401Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <input type="text" className={"search_input"}/>
                        </div>
                        <button className="btn_add">
                            <UserAdd color={'#FFFFFF'} />
                        </button>
                    </div>
                    <table className={'table'}>
                        <tr className='table_header'>
                            <th className='table_header__cail'>Name</th>
                            <th className='table_header__cail'>Subject</th>
                            <th className='table_header__cail'>Classes</th>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_row__cail'>Azan Tanat</td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#d496a7'}}>Math</p>
                                    <p className='content_info' style={{backgroundColor:'#78e0dc'}}>History</p>
                                    <p className='content_info' style={{backgroundColor:'#8eedf7'}}>PE</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#48e5c2'}}>11A</p>
                                    <p className='content_info' style={{backgroundColor:'#fcfaf8'}}>10C</p>
                                    <p className='content_info' style={{backgroundColor:'#f3d3bd'}}>6F</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper" style={{justifyContent: 'right', gap:20}}>
                                    <button className="btn_cail">
                                        <Edit/>
                                    </button>
                                    <button className="btn_cail">
                                        <UserRemove />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_row__cail'>Azan Tanat</td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#d496a7'}}>Math</p>
                                    <p className='content_info' style={{backgroundColor:'#78e0dc'}}>History</p>
                                    <p className='content_info' style={{backgroundColor:'#8eedf7'}}>PE</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#48e5c2'}}>11A</p>
                                    <p className='content_info' style={{backgroundColor:'#fcfaf8'}}>10C</p>
                                    <p className='content_info' style={{backgroundColor:'#f3d3bd'}}>6F</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper" style={{justifyContent: 'right', gap:20}}>
                                    <button className="btn_cail">
                                        <Edit/>
                                    </button>
                                    <button className="btn_cail">
                                        <UserRemove />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_row__cail'>Azan Tanat</td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#d496a7'}}>Math</p>
                                    <p className='content_info' style={{backgroundColor:'#78e0dc'}}>History</p>
                                    <p className='content_info' style={{backgroundColor:'#8eedf7'}}>PE</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#48e5c2'}}>11A</p>
                                    <p className='content_info' style={{backgroundColor:'#fcfaf8'}}>10C</p>
                                    <p className='content_info' style={{backgroundColor:'#f3d3bd'}}>6F</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper" style={{justifyContent: 'right', gap:20}}>
                                    <button className="btn_cail">
                                        <Edit/>
                                    </button>
                                    <button className="btn_cail">
                                        <UserRemove />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_row__cail'>Azan Tanat</td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#d496a7'}}>Math</p>
                                    <p className='content_info' style={{backgroundColor:'#78e0dc'}}>History</p>
                                    <p className='content_info' style={{backgroundColor:'#8eedf7'}}>PE</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#48e5c2'}}>11A</p>
                                    <p className='content_info' style={{backgroundColor:'#fcfaf8'}}>10C</p>
                                    <p className='content_info' style={{backgroundColor:'#f3d3bd'}}>6F</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper" style={{justifyContent: 'right', gap:20}}>
                                    <button className="btn_cail">
                                        <Edit/>
                                    </button>
                                    <button className="btn_cail">
                                        <UserRemove />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_row__cail'>Azan Tanat</td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#d496a7'}}>Math</p>
                                    <p className='content_info' style={{backgroundColor:'#78e0dc'}}>History</p>
                                    <p className='content_info' style={{backgroundColor:'#8eedf7'}}>PE</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#48e5c2'}}>11A</p>
                                    <p className='content_info' style={{backgroundColor:'#fcfaf8'}}>10C</p>
                                    <p className='content_info' style={{backgroundColor:'#f3d3bd'}}>6F</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper" style={{justifyContent: 'right', gap:20}}>
                                    <button className="btn_cail">
                                        <Edit/>
                                    </button>
                                    <button className="btn_cail">
                                        <UserRemove />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_row__cail'>Azan Tanat</td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#d496a7'}}>Math</p>
                                    <p className='content_info' style={{backgroundColor:'#78e0dc'}}>History</p>
                                    <p className='content_info' style={{backgroundColor:'#8eedf7'}}>PE</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper">
                                    <p className='content_info' style={{backgroundColor:'#48e5c2'}}>11A</p>
                                    <p className='content_info' style={{backgroundColor:'#fcfaf8'}}>10C</p>
                                    <p className='content_info' style={{backgroundColor:'#f3d3bd'}}>6F</p>
                                </div>
                            </td>
                            <td className='table_row__cail'>
                                <div className="content_wrapper" style={{justifyContent: 'right', gap:20}}>
                                    <button className="btn_cail">
                                        <Edit/>
                                    </button>
                                    <button className="btn_cail">
                                        <UserRemove />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>


            </div>

        </AdminIndex>
    )
}

export default Teachers