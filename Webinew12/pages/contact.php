<?php
$basePath = "../";
$activePage = "contact";
$pageTitle = "Start a Project | Webinerds";
$pageDescription = "Start a website or digital project with Webinerds.";

require __DIR__ . "/../includes/header.php";
?>

<main class="contact-page">

    <!-- COMPACT HERO -->
    <section class="contact-hero-compact">

        <div class="container">

            <div class="contact-hero-content reveal">

                <div class="eyebrow">Start a project</div>

                <h1>
                    Tell us what
                    <span class="accent-text">you're building.</span>
                </h1>

                <p>
                    A website, web application, digital product or something
                    you're still figuring out. Start with the idea.
                </p>

            </div>

        </div>

    </section>


    <!-- CONTACT AREA -->
    <section class="contact-compact-section">

        <div class="container">

            <div class="contact-compact-grid">

                <!-- LEFT -->
                <div class="contact-compact-info reveal-left">

                    <div class="contact-mini-label">
                        PROJECT / 01
                    </div>

                    <h2>
                        Let's make
                        something useful.
                    </h2>

                    <p>
                        You don't need a technical brief. Tell us what you
                        need, what problem you're solving and what you want
                        the final product to accomplish.
                    </p>


                    <div class="contact-process">

                        <div class="contact-process-item active">

                            <span>01</span>

                            <div>
                                <strong>Tell us about it</strong>
                                <small>Share your idea and requirements.</small>
                            </div>

                        </div>

                        <div class="contact-process-item">

                            <span>02</span>

                            <div>
                                <strong>We understand it</strong>
                                <small>We review the project context.</small>
                            </div>

                        </div>

                        <div class="contact-process-item">

                            <span>03</span>

                            <div>
                                <strong>We start the conversation</strong>
                                <small>Next steps can then be discussed.</small>
                            </div>

                        </div>

                    </div>

                </div>


                <!-- FORM -->
                <div class="compact-form-wrap reveal-right">

                    <form
                        class="compact-project-form"
                        id="project-form"
                        method="POST"
                        action=""
                    >

                        <div class="compact-form-top">

                            <span>PROJECT ENQUIRY</span>

                            <span>
                                <i></i> Secure enquiry
                            </span>

                        </div>


                        <!-- NAME -->
                        <div class="compact-field">

                            <label for="name">
                                Your name <b>*</b>
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                autocomplete="name"
                                required
                            >

                        </div>


                        <!-- EMAIL -->
                        <div class="compact-field">

                            <label for="email">
                                Email address <b>*</b>
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                autocomplete="email"
                                required
                            >

                        </div>


                        <!-- SERVICE -->
                        <div class="compact-field">

                            <label>
                                What do you need? <b>*</b>
                            </label>

                            <div class="service-selector">

                                <label class="service-option">

                                    <input
                                        type="radio"
                                        name="service"
                                        value="website"
                                        required
                                    >

                                    <span>
                                        Website
                                    </span>

                                </label>


                                <label class="service-option">

                                    <input
                                        type="radio"
                                        name="service"
                                        value="web-application"
                                    >

                                    <span>
                                        Web App
                                    </span>

                                </label>


                                <label class="service-option">

                                    <input
                                        type="radio"
                                        name="service"
                                        value="graphic-design"
                                    >

                                    <span>
                                        Graphic Design
                                    </span>

                                </label>


                                <label class="service-option">

                                    <input
                                        type="radio"
                                        name="service"
                                        value="hosting"
                                    >

                                    <span>
                                        Hosting
                                    </span>

                                </label>


                                <label class="service-option">

                                    <input
                                        type="radio"
                                        name="service"
                                        value="cybersecurity"
                                    >

                                    <span>
                                        Security
                                    </span>

                                </label>

                            </div>

                        </div>


                        <!-- COMPANY + BUDGET -->
                        <div class="compact-two-fields">

                            <div class="compact-field">

                                <label for="company">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Company / organization"
                                    autocomplete="organization"
                                >

                            </div>


                            <div class="compact-field">

                                <label for="budget">
                                    Budget
                                </label>

                                <select
                                    id="budget"
                                    name="budget"
                                >

                                    <option value="">
                                        Select range
                                    </option>

                                    <option value="below-50k">
                                        Below KES 50K
                                    </option>

                                    <option value="50k-100k">
                                        KES 50K – 100K
                                    </option>

                                    <option value="100k-150k">
                                        KES 100K – 150K
                                    </option>

                                    <option value="above-150k">
                                        Above KES 150K
                                    </option>

                                    <option value="not-sure">
                                        Not sure yet
                                    </option>

                                </select>

                            </div>

                        </div>


                        <!-- DETAILS -->
                        <div class="compact-field">

                            <label for="project_details">
                                Tell us about the project <b>*</b>
                            </label>

                            <textarea
                                id="project_details"
                                name="project_details"
                                rows="5"
                                placeholder="What are you trying to build?"
                                required
                            ></textarea>

                        </div>


                        <!-- PHONE -->
                        <div class="compact-field">

                            <label for="phone">
                                Phone number
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+254 7XX XXX XXX"
                                autocomplete="tel"
                            >

                        </div>


                        <!-- SUBMIT -->
                        <div class="compact-submit">

                            <button
                                type="submit"
                                class="compact-submit-btn magnetic"
                            >

                                <span>
                                    Send enquiry
                                </span>

                                <strong>
                                    ↗
                                </strong>

                            </button>

                            <small>
                                We'll use your details only to respond
                                to your enquiry.
                            </small>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </section>


    <!-- SMALL FOOTER CTA -->
    <section class="contact-bottom">

        <div class="container">

            <div class="contact-bottom-inner reveal">

                <span>
                    WEBINERDS
                </span>

                <p>
                    Digital experiences built for ambitious businesses.
                </p>

                <a href="services.php">
                    Explore services ↗
                </a>

            </div>

        </div>

    </section>

</main>

<?php require __DIR__ . "/../includes/footer.php"; ?>