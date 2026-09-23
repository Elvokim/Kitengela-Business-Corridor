<?php
/**
 * Webinerds — Global Footer
 *
 * This file is included by all public pages.
 * $basePath is normally defined by the page before loading the header.
 * The fallback below prevents undefined-variable warnings.
 */

$basePath = $basePath ?? "";
?>

</main>

<footer class="site-footer">

    <div class="footer-main">
        <div class="container">

            <!-- Footer intro -->
            <div class="footer-intro">

                <div class="footer-intro-copy">
                    <span class="footer-kicker">
                        WEBINERDS / DIGITAL STUDIO
                    </span>

                    <h2>
                        Let's build something <span>useful.</span>
                    </h2>
                </div>

                <a
                    href="<?php echo htmlspecialchars($basePath . 'pages/contact.php', ENT_QUOTES, 'UTF-8'); ?>"
                    class="footer-arrow-link"
                >
                    <span>Start a project</span>
                    <strong aria-hidden="true">↗</strong>
                </a>

            </div>


            <div class="footer-rule"></div>


            <!-- Footer columns -->
            <div class="footer-grid">

                <!-- Brand -->
                <div class="footer-brand-column">

                    <a
                        href="<?php echo htmlspecialchars($basePath . 'index.php', ENT_QUOTES, 'UTF-8'); ?>"
                        class="footer-brand"
                        aria-label="Webinerds home"
                    >
                        <span class="footer-brand-mark">W</span>
                        <span>WEBINERDS</span>
                    </a>

                    <p class="footer-description">
                        A technology studio designing and developing useful
                        digital experiences for businesses, organizations
                        and ambitious ideas.
                    </p>

                    <span class="footer-location-note">
                        Technology · Design · Digital Products
                    </span>

                </div>


                <!-- Explore -->
                <div class="footer-column">

                    <span class="footer-column-title">
                        Explore
                    </span>

                    <nav aria-label="Footer navigation">

                        <a href="<?php echo htmlspecialchars($basePath . 'index.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Home
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/services.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Services
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/work.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Work
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/about.php', ENT_QUOTES, 'UTF-8'); ?>">
                            About
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/process.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Process
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/contact.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Contact
                        </a>

                    </nav>

                </div>


                <!-- Capabilities -->
                <div class="footer-column">

                    <span class="footer-column-title">
                        Capabilities
                    </span>

                    <nav aria-label="Services">

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/websites.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Website Development
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/web-applications.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Web Applications
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/graphic-design.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Graphic Design
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/hosting.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Hosting &amp; Infrastructure
                        </a>

                        <a href="<?php echo htmlspecialchars($basePath . 'pages/cybersecurity.php', ENT_QUOTES, 'UTF-8'); ?>">
                            Cybersecurity
                        </a>

                    </nav>

                </div>


                <!-- Contact -->
                <div class="footer-column footer-contact-column">

                    <span class="footer-column-title">
                        Contact
                    </span>

                    <div class="footer-placeholder">
                        <span>Contact details</span>
                        <small>To be confirmed</small>
                    </div>

                    <a
                        href="<?php echo htmlspecialchars($basePath . 'pages/contact.php', ENT_QUOTES, 'UTF-8'); ?>"
                        class="footer-contact-link"
                    >
                        Project enquiry
                        <strong aria-hidden="true">↗</strong>
                    </a>

                </div>

            </div>


            <div class="footer-rule footer-rule-bottom"></div>


            <!-- Footer bottom -->
            <div class="footer-bottom">

                <div class="footer-copyright">
                    ©
                    <span id="current-year">
                        <?php echo date('Y'); ?>
                    </span>
                    Webinerds. All rights reserved.
                </div>


                <div class="footer-bottom-links">

                    <a
                        href="<?php echo htmlspecialchars($basePath . 'robots.txt', ENT_QUOTES, 'UTF-8'); ?>"
                    >
                        Robots
                    </a>

                    <a
                        href="<?php echo htmlspecialchars($basePath . 'sitemap.xml', ENT_QUOTES, 'UTF-8'); ?>"
                    >
                        Sitemap
                    </a>

                </div>


                <button
                    type="button"
                    class="back-to-top"
                    id="back-to-top"
                    aria-label="Back to top"
                >
                    <span>Back to top</span>
                    <strong aria-hidden="true">↑</strong>
                </button>

            </div>

        </div>
    </div>

</footer>


<!-- Global JavaScript -->
<script
    src="<?php echo htmlspecialchars($basePath . 'js/main.js', ENT_QUOTES, 'UTF-8'); ?>"
    defer
></script>

</body>
</html>