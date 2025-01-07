import style from './Blog.module.css';
import Feature from "../MainPage/Feature/Feature";
import img1 from '../../img/Blog/Rectangle 68.svg';
import img2 from '../../img/Blog/Rectangle 681.svg';
import img3 from '../../img/Blog/Rectangle 682.svg';
import icon1 from '../../img/Blog/dashicons_admin-users.svg'
import icon2 from '../../img/Blog/uis_calender.svg'
import icon3 from '../../img/Blog/ci_tag.svg'
import icon4 from '../../img/Blog/akar-icons_search.svg'
import img4 from '../../img/Blog/Rectangle 693.svg';
import img5 from '../../img/Blog/Rectangle 694.svg';
import img6 from '../../img/Blog/Rectangle 695.svg';
import img7 from '../../img/Blog/Rectangle 696.svg';
import img8 from '../../img/Blog/Rectangle 697.svg';
import Quality from "../ShopPage/Quality/Quality";
function Blog({ title, text }) {
    return (<>
        <Feature title="Blog" text="Blog" />
        <div className={style.container}>
            {/* Первый столбец */}
            <div className={style.wrapInfo}>
                <img className={style.img2} src={img1} alt="" />
                <div className={style.rowIconText}>
                    <div className={style.rowAdmin}>
                        <img className={style.icon1} src={icon1} alt="" />
                        <p className={style.textAdmin}>Admin</p>
                    </div>
                    <div className={style.rowСalendar}>
                        <img className={style.icon1} src={icon2} alt="" />
                        <p className={style.textСalendar}>14 Oct 2022</p>
                    </div>
                    <div className={style.rowTeg}>
                        <img className={style.icon1} src={icon3} alt="" />
                        <p className={style.textWood}>Wood</p>
                    </div>
                </div>
                <p className={style.textGoingAll}>Going all-in with millennial design</p>
                <p className={style.textLoremIpsum}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <p className={style.textReadMore}>Read more</p>
                <img className={style.img2} src={img2} alt="" />
                <div className={style.rowIconText}>
                    <div className={style.rowAdmin}>
                        <img className={style.icon1} src={icon1} alt="" />
                        <p className={style.textAdmin}>Admin</p>
                    </div>
                    <div className={style.rowСalendar}>
                        <img className={style.icon1} src={icon2} alt="" />
                        <p className={style.textСalendar}>14 Oct 2022</p>
                    </div>
                    <div className={style.rowTeg}>
                        <img className={style.icon1} src={icon3} alt="" />
                        <p className={style.textWood}>Handmade</p>
                    </div>
                </div>

                <p className={style.textGoingAll}>Exploring new ways of decorating</p>
                <p className={style.textLoremIpsum}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <p className={style.textReadMore}>Read more</p>

                <img className={style.img2} src={img3} alt="" />
                <div className={style.rowIconText}>
                    <div className={style.rowAdmin}>
                        <img className={style.icon1} src={icon1} alt="" />
                        <p className={style.textAdmin}>Admin</p>
                    </div>
                    <div className={style.rowСalendar}>
                        <img className={style.icon1} src={icon2} alt="" />
                        <p className={style.textСalendar}>14 Oct 2022</p>
                    </div>
                    <div className={style.rowTeg}>
                        <img className={style.icon1} src={icon3} alt="" />
                        <p className={style.textWood}>Handmade</p>
                    </div>
                </div>
                <p className={style.textGoingAll}>Handmade pieces that took time to make</p>
                <p className={style.textLoremIpsum}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <p className={style.textReadMore}>Read more</p>
            </div>

            {/* Второй столбец */}
            <div className={style.wrapCategories}>
                <div class={style.inputContainer}>
                    <input className={style.input} type="text" />
                    <img className={style.icon4} src={icon4} alt="" />
                </div>

                <p className={style.textCategories}>Categories</p>
                <div class={style.rowCrafts}>
                    <p className={style.textCrafts}>Crafts</p>
                    <p className={style.textCraftsNumber}>2</p>
                </div>
                <div class={style.rowCrafts}>
                    <p className={style.textCrafts}>Design</p>
                    <p className={style.textCraftsNumber}>8</p>
                </div>
                <div class={style.rowCrafts}>
                    <p className={style.textCrafts}>Handmade</p>
                    <p className={style.textCraftsNumber}>7</p>
                </div>
                <div class={style.rowCrafts}>
                    <p className={style.textCrafts}>Interior</p>
                    <p className={style.textCraftsNumber}>1</p>
                </div>
                <div class={style.rowCrafts}>
                    <p className={style.textCrafts}>Wood</p>
                    <p className={style.textCraftsNumber}>6</p>
                </div>

                <p className={style.textRecentPosts}>Recent Posts</p>

                <div class={style.wrapRecentPosts}>
                    <div class={style.wrapRecentPostsRow}>
                        <img src={img4} alt="" />
                        <div class={style.wrapRecentPostsColumn}>
                            <p class={style.textRecentPostsColumn}>Going all-in with millennial design</p>
                            <p class={style.textGrayRecentPostsColumn}>03 Aug 2022</p>
                        </div>
                    </div>

                    <div class={style.wrapRecentPostsRow}>
                        <img src={img5} alt="" />
                        <div class={style.wrapRecentPostsColumn}>
                            <p class={style.textRecentPostsColumn}>Going all-in with millennial design</p>
                            <p class={style.textGrayRecentPostsColumn}>03 Aug 2022</p>
                        </div>
                    </div>

                    <div class={style.wrapRecentPostsRow}>
                        <img src={img6} alt="" />
                        <div class={style.wrapRecentPostsColumn}>
                            <p class={style.textRecentPostsColumn}>Going all-in with millennial design</p>
                            <p class={style.textGrayRecentPostsColumn}>03 Aug 2022</p>
                        </div>
                    </div>

                    <div class={style.wrapRecentPostsRow}>
                        <img src={img7} alt="" />
                        <div class={style.wrapRecentPostsColumn}>
                            <p class={style.textRecentPostsColumn}>Going all-in with millennial design</p>
                            <p class={style.textGrayRecentPostsColumn}>03 Aug 2022</p>
                        </div>
                    </div>

                    <div class={style.wrapRecentPostsRow}>
                        <img src={img8} alt="" />
                        <div class={style.wrapRecentPostsColumn}>
                            <p class={style.textRecentPostsColumn}>Going all-in with millennial design</p>
                            <p class={style.textGrayRecentPostsColumn}>03 Aug 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.wrapButtons}>
            <button className={style.button}>1</button>
            <button className={style.button}>2</button>
            <button className={style.button}>3</button>
            <button className={style.buttonNext}>Next</button>
        </div>
        <Quality />
    </>)
}
export default Blog;    