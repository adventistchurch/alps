import React from "react";
import {Meta, Story} from "@storybook/react";
import {RelatedPosts} from "../../asides/relatedPosts/RelatedPosts";
import relatedPostsData from "../../asides/relatedPosts/RelatedPosts.stories.json";
import {ArticleContentShort, ArticleContentShortProps} from "./ArticleContentShort";

export default {
    title: "organisms/content/Article Content Short",
    component: ArticleContentShort,
    argTypes: {
        spacing: {
            defaultValue: "double",
            control: {type: "select"}
        }
    }
} as Meta;

const Template: Story<ArticleContentShortProps> = (args) =>
    <ArticleContentShort {...args}>
        <p key="p-1">
            <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <a href="https://adventist.org">Donec malesuada</a>, est ut viverra
            euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at
            ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin
            purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi
            tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis
            ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit
            vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et
            congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt
            lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum.
            Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallis sem.
        </p>
        <p key="p-2">
            <a href="https://adventist.org">
                Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam.
            </a>{' '}
            Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend, arcu sit amet
            faucibus blandit, dolor urna euismod sem, non molestie nulla nulla porta
            nibh. Integer commodo arcu vitae nisl iaculis, non hendrerit arcu sodales.
            Vivamus sagittis quam ut elit posuere ultrices. In blandit erat orci, vitae
            posuere enim vehicula quis. Nullam posuere mauris odio, eu facilisis lorem
            iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis feugiat
            arcu. Etiam est magna, aliquet ut blandit sit amet, malesuada a lacus. Nam
            scelerisque arcu non sem auctor molestie. Vestibulum sit amet congue ex.
        </p>
        <div>
            <footer className="c-article__footer u-padding--left">
                <a href=""
                   className="c-social-tools__comment can-be--white o-kicker u-theme--color--base u-space--right">
                        <span className="u-icon u-icon--xs u-theme--path-fill--base u-space--quarter--right"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                <title>o-icon__contact</title>
                                <path d="M0,0V8H6l4,2V0ZM8,6.76,6.47,6H2V2H8Z" fill="#777" />
                            </svg>
                        </span>Comment</a>
                <div className="c-share-tools js-hover">
                    <a href="http://www.addthis.com/bookmark.php?v=250&amp;pubid=ra-4ed4fc0e60966005"
                       className="c-share-tools__toggle addthis_button_compact can-be--white o-kicker u-theme--color--base">
                            <span className="u-icon u-icon--xs u-theme--path-fill--base u-space--quarter--right"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <title>icon-share</title>
                                    <path
                                        d="M14.21,6.21,7,9.8c0,.06,0,.13,0,.2s0,.13,0,.2l7.17,3.58a3.46,3.46,0,0,1,2.26-.84,3.53,3.53,0,1,1-3.53,3.53c0-.07,0-.14,0-.2L5.8,12.68a3.53,3.53,0,1,1,0-5.37L13,3.73c0-.07,0-.13,0-.2a3.53,3.53,0,1,1,3.53,3.53A3.47,3.47,0,0,1,14.21,6.21Z" />
                                </svg></span>Share</a>
                    <ul
                        className="c-share-tools__list u-background-color--gray--light can-be--dark-dark u-theme--border-color--darker--left u-spacing--half u-padding--half">
                        <li className="c-share-tools__list-item">
                            <a className="c-share-tools__link u-theme--color--base addthis_button_facebook">Facebook</a>
                        </li>
                        <li className="c-share-tools__list-item">
                            <a className="c-share-tools__link u-theme--color--base addthis_button_twitter">Twitter</a>
                        </li>
                        <li className="c-share-tools__list-item">
                            <a className="c-share-tools__link u-theme--color--base addthis_button_google_plusone">Google</a>
                        </li>
                        <li className="c-share-tools__list-item">
                            <a className="c-share-tools__link u-theme--color--base addthis_button_email">Email</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
        <ul className="c-comment__list u-spacing">
            <div className="c-block__heading u-theme--border-color--darker">
                <h3 className="c-block__heading-title u-theme--color--darker">4 comments</h3>
            </div>
            <li className="c-comment__list-item comment u-spacing">
                <div className="c-comment--inner u-border--left u-theme--border-color--darker">
                    <div className="c-comment__avatar u-space--right">
                        <img alt="" src="//placeimg.com/32/32/people" className="avatar" height="50" width="50"/>
                    </div>
                    <div className="c-comment__body u-spacing--quarter">
                        <div className="c-comment__meta">
                            <span className="byline u-font--secondary--s can-be--white u-theme--color--darker"><a
                                href="">Bob Smith</a></span>
                            <span className="o-divider">|</span>
                            <span className="pub_date u-font--secondary--s u-color--gray can-be--white">9 days
                                ago</span><span
                            className="c-comment__edit-link u-font--secondary--s u-theme--color--base"><a
                            className="c-comment-edit-link" href="">(Edit)</a></span>
                        </div>
                        <p className="c-comment__content">Comment 1: Vivamus sollicitudin ipsum vel rutrum facilisis.
                            Vestibulum eu cursus massa. Donec faucibus velit eu enim dapibus, sed scelerisque nibh
                            finibus. Praesent imperdiet, leo ut ullamcorper facilisis, felis neque vestibulum mi, in
                            vehicula turpis libero vestibulum eros. Nunc ac lectus id dui eleifend dignissim. </p>
                        <div className="c-comment__reply">
                            <a href="" className="u-font--secondary--s u-theme--color--base">Reply</a>
                        </div>
                    </div>
                </div>
                <ul className="c-comment__children__list children u-spacing">
                    <li className="c-comment__children__list-item comment">
                        <div className="c-comment--inner u-border--left u-theme--border-color--darker">
                            <div className="c-comment__avatar u-space--right">
                                <img alt="" src="//placeimg.com/32/32/people" className="avatar" height="50" width="50"/>
                            </div>
                            <div className="c-comment__body u-spacing--quarter">
                                <div className="c-comment__meta">
                                    <span
                                        className="byline u-font--secondary--s can-be--white u-theme--color--darker"><a
                                        href="">George Waltin</a></span>
                                    <span className="o-divider">|</span>
                                    <span className="pub_date u-font--secondary--s u-color--gray can-be--white">8 days
                                        ago</span><span
                                    className="c-comment__edit-link u-font--secondary--s u-theme--color--base"><a
                                    className="c-comment-edit-link" href="">(Edit)</a></span>
                                </div>
                                <p className="c-comment__content">Sub Comment 1: Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nulla vitae lorem ullamcorper, posuere risus eu, consequat justo.
                                    Praesent at mi arcu. Praesent et vestibulum sem.</p>
                                <div className="c-comment__reply">
                                    <a href="" className="u-font--secondary--s u-theme--color--base">Reply</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="c-comment__children__list children u-spacing">
                    <li className="c-comment__children__list-item comment">
                        <div className="c-comment--inner u-border--left u-theme--border-color--darker">
                            <div className="c-comment__avatar u-space--right">
                                <img alt="" src="//placeimg.com/32/32/people" className="avatar" height="50" width="50"/>
                            </div>
                            <div className="c-comment__body u-spacing--quarter">
                                <div className="c-comment__meta">
                                    <span
                                        className="byline u-font--secondary--s can-be--white u-theme--color--darker"><a
                                        href="">Bob Smith</a></span>
                                    <span className="o-divider">|</span>
                                    <span className="pub_date u-font--secondary--s u-color--gray can-be--white">7 days
                                        ago</span><span
                                    className="c-comment__edit-link u-font--secondary--s u-theme--color--base"><a
                                    className="c-comment-edit-link" href="">(Edit)</a></span>
                                </div>
                                <p className="c-comment__content">Sub Comment 2: Nam posuere ac leo et accumsan.
                                    Vestibulum
                                    condimentum tincidunt orci non dapibus. Aenean dapibus sem vel massa bibendum
                                    placerat. Duis nec est sed justo pulvinar faucibus.</p>
                                <div className="c-comment__reply">
                                    <a href="" className="u-font--secondary--s u-theme--color--base">Reply</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li className="c-comment__list-item comment u-spacing">
                <div className="c-comment--inner u-border--left u-theme--border-color--darker">
                    <div className="c-comment__avatar u-space--right">
                        <img alt="" src="//placeimg.com/32/32/people" className="avatar" height="50" width="50"/>
                    </div>
                    <div className="c-comment__body u-spacing--quarter">
                        <div className="c-comment__meta">
                            <span className="byline u-font--secondary--s can-be--white u-theme--color--darker"><a
                                href="">John Doe</a></span>
                            <span className="o-divider">|</span>
                            <span className="pub_date u-font--secondary--s u-color--gray can-be--white">5 days
                                ago</span><span
                            className="c-comment__edit-link u-font--secondary--s u-theme--color--base"><a
                            className="c-comment-edit-link" href="">(Edit)</a></span>
                        </div>
                        <p className="c-comment__content">Comment 2: Praesent imperdiet, leo ut ullamcorper facilisis,
                            felis
                            neque vestibulum mi, in vehicula turpis libero vestibulum eros. Nunc ac lectus id dui
                            eleifend dignissim.</p>
                        <div className="c-comment__reply">
                            <a href="" className="u-font--secondary--s u-theme--color--base">Reply</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div className="c-comment-form">
            <div className="comment-respond u-spacing--half">
                <h3 className="comment-reply-title u-font--secondary--m u-text-transform--upper u-theme--color--darker">
                    <strong>Leave a Comment</strong> <small><a rel="nofollow" id="cancel-comment-reply-link"
                                                               href="/spirituality/sabbath/article/the-sabbath-in-colossians/#respond"
                                                               style={{display: "none"}}>Cancel reply</a></small></h3>
                <form action="" method="post" className="u-spacing--half" noValidate={true}>
                    <p className="comment-form-comment">
                        <textarea name="comment" cols={45} rows={8} aria-required="true" required={true}/>
                    </p>
                    <p className="form-submit">
                        <input name="submit" type="submit" className="submit" value="Post Comment"/>
                    </p>
                </form>
            </div>
        </div>
    </ArticleContentShort>;
export const Basic = Template.bind({});

export const with_dropcap = Template.bind({});
with_dropcap.args = {
    hasDropcap: true
}

export const with_sidebar = Template.bind({});
with_sidebar.args = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sidebar: <RelatedPosts blocks={relatedPostsData.blocks}/>
}
