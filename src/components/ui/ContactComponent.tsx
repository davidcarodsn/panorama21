import React from 'react'

export const ContactComponent = () => {
  return (
    <section className="no-col-padding columns-stretch column-xs-12 column-equal-height columns-flex scheme_side">
      <div className="container-fluid">
        <div className="row">
          <div className="columns_wrap">
            <div className="column_container column-1_3">
              <div className="column-inner ph15p">
                <div className="height_large"></div>
                <div className="height_huge hide_on_mobile"></div>
                <h3 className="trx_addons_no_margins sc_align_center">
                  Contacts
                </h3>
                <div className="height_small"></div>
                <div className="sc_content sc_content_default">
                  <div className="sc_content_container">
                    <div className="sc_align_center">
                      <span className="trx_addons_dark">Windsor Apartments</span>
                      <br />
                      123, New Lenox<br />
                      Chicago, IL 60606<br />
                      Phone:
                      <span className="trx_addons_dark"><a href="tel:+1234567890">123-456-7890</a>
                        <br /></span>
                      Fax: 098-765-4321<br />
                      Email:
                      <span className="trx_addons_dark"><a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="height_medium"></div>
                <div className="widget_area sc_widget_socials">
                  <aside className="widget widget_socials">
                    <div className="socials_wrap sc_align_center">
                      <span className="social_item">
                        <a href="#" target="_blank" className="social_icons social_twitter">
                          <span className="trx_addons_icon-twitter"></span>
                        </a>
                      </span><span className="social_item">
                        <a href="#" target="_blank" className="social_icons social_facebook">
                          <span className="trx_addons_icon-facebook"></span>
                        </a>
                      </span><span className="social_item">
                        <a href="#" target="_blank" className="social_icons social_instagram">
                          <span className="trx_addons_icon-instagram"></span>
                        </a>
                      </span>
                    </div>
                  </aside>
                </div>
                <div className="height_medium"></div>
              </div>
            </div>
            <div className="column_container column-1_3">
              <div className="column-inner phn">
                <a id="sc_anchor_contacts" className="sc_anchor sc_anchor_default" title="Contacts"
                  data-icon="icon-email" data-url=""></a>

                <div id="sc_googlemap_1_wrap" className="sc_googlemap_wrap">
                  <div id="sc_googlemap_1" className="sc_googlemap sc_googlemap_default h92vh" data-zoom="16"
                    data-style="dark">
                    <iframe style={{border: '0px', width: '100%', height: '100%'}}
                      src="https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=12&q=56-34+Waldron+St+Flushing%2C+NY+11368%2C+USA"
                      aria-label="123, New Lenox Chicago, IL 60606, USA ">
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="column_container column-1_3">
              <div className="column-inner ph20p">
                <div className="height_large"></div>
                <div className="height_huge hide_on_mobile"></div>
                <h3 className="trx_addons_no_margins sc_align_center">
                  ENQUIRE
                </h3>
                <div className="height_small"></div>
                <div className="sc_content sc_content_default">
                  <div className="sc_content_container">
                    <div className="sc_form sc_form_enquire sc_form_style_form_1">
                      <form className="sc_form_form contact_1" method="post" action="include/contact-form.php">
                        <div className="sc_form_info">
                          <div className="trx_addons_columns_wrap columns_padding_bottom">
                          </div>
                        </div>
                        <div className="sc_form_fields">
                          <div className="trx_addons_columns_wrap">
                            <div className="sc_form_details trx_addons_column-1_2">
                              <label className="sc_form_field sc_form_field_name required">
                                <span className="sc_form_field_wrap">
                                  <input type="text" name="name" aria-required="true"
                                    id="contact_form_username" placeholder="Your name" />
                                </span>
                              </label>
                              <label className="sc_form_field sc_form_field_email required">
                                <span className="sc_form_field_wrap">
                                  <input type="text" name="email" aria-required="true" id="contact_form_email"
                                    placeholder="Your e-mail" />
                                </span>
                              </label>
                            </div>
                            <div className="sc_form_message trx_addons_column-1_2">
                              <label className="sc_form_field sc_form_field_message required">
                                <span className="sc_form_field_wrap">
                                  <textarea name="message" aria-required="true" id="contact_form_message"
                                    placeholder="Your message"></textarea>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="sc_form_field sc_form_field_button">
                            <button>Schedule a tour</button>
                          </div>
                          <div className="trx_addons_message_box sc_form_result">
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="height_medium"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
