<?php
/**
 * Webinerds — Global Header
 */

$basePath = $basePath ?? "";
$activePage = $activePage ?? "";

$pageTitle = $pageTitle ?? "Webinerds — Digital Experiences Built for Ambitious Businesses";
$pageDescription = $pageDescription ?? "Webinerds designs and develops professional websites and practical digital products.";

$navigation = [
    "home" => [
        "label" => "Home",
        "url" => $basePath . "index.php"
    ],
    "services" => [
        "label" => "Services",
        "url" => $basePath . "pages/services.php"
    ],
    "work" => [
        "label" => "Work",
        "url" => $basePath . "pages/work.php"
    ],
    "about" => [
        "label" => "About",
        "url" => $basePath . "pages/about.php"
    ],
    "process" => [
        "label" => "Process",
        "url" => $basePath . "pages/process.php"
    ],
    "contact" => [
        "label" => "Contact",
        "url" => $basePath . "pages/contact.php"
    ]
];

$logoPath = $basePath . "assets/images/webinerds-logo.png";
$faviconPath = $basePath . "assets/images/webinerds-logo.png";
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="<?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?>"
    >

    <meta
        name="theme-color"
        content="#ffffff"
    >

    <!-- Favicon -->
    <link
        rel="icon"
        type="image/png"
        href="<?php echo htmlspecialchars($faviconPath, ENT_QUOTES, 'UTF-8'); ?>"
    >

    <link
        rel="apple-touch-icon"
        href="<?php echo htmlspecialchars($faviconPath, ENT_QUOTES, 'UTF-8'); ?>"
    >

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
        rel="stylesheet"
    >

    <!-- Main stylesheet -->
    <link
        rel="stylesheet"
        href="<?php echo htmlspecialchars($basePath . 'css/style.css', ENT_QUOTES, 'UTF-8'); ?>"
    >

    <title>
        <?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?>
    </title>

</head>

<body>

<a
    class="skip-link"
    href="#main-content"
>
    Skip to content
</a>


<header
    class="site-header"
    id="site-header"
>

    <div class="header-shell">


        <!-- BRAND -->
        <a
            href="<?php echo htmlspecialchars($basePath . 'index.php', ENT_QUOTES, 'UTF-8'); ?>"
            class="site-brand"
            aria-label="Webinerds home"
        >

            <span class="site-brand-logo">
                <img
                    src="<?php echo htmlspecialchars($logoPath, ENT_QUOTES, 'UTF-8'); ?>"
                    alt="Webinerds"
                    width="180"
                    height="48"
                >
            </span>

        </a>


        <!-- DESKTOP NAVIGATION -->
        <nav
            class="desktop-navigation"
            aria-label="Primary navigation"
        >

            <?php foreach ($navigation as $key => $item): ?>

                <a
                    href="<?php echo htmlspecialchars($item["url"], ENT_QUOTES, 'UTF-8'); ?>"
                    class="nav-link <?php echo $activePage === $key ? 'is-active' : ''; ?>"

                    <?php
                    echo $activePage === $key
                        ? 'aria-current="page"'
                        : '';
                    ?>
                >

                    <span>
                        <?php echo htmlspecialchars($item["label"], ENT_QUOTES, 'UTF-8'); ?>
                    </span>

                </a>

            <?php endforeach; ?>

        </nav>


        <!-- HEADER ACTIONS -->
        <div class="header-actions">

            <a
                href="<?php echo htmlspecialchars($basePath . 'pages/contact.php', ENT_QUOTES, 'UTF-8'); ?>"
                class="header-project-link"
            >

                <span>Start a project</span>

                <strong aria-hidden="true">
                    ↗
                </strong>

            </a>


            <!-- MOBILE MENU -->
            <button
                type="button"
                class="menu-toggle"
                id="menu-toggle"
                aria-label="Open navigation menu"
                aria-controls="mobile-navigation"
                aria-expanded="false"
            >

                <span class="menu-toggle-label">
                    Menu
                </span>

                <span
                    class="menu-toggle-icon"
                    aria-hidden="true"
                >
                    <i></i>
                    <i></i>
                </span>

            </button>

        </div>

    </div>


    <!-- MOBILE NAVIGATION -->
    <div
        class="mobile-navigation"
        id="mobile-navigation"
        aria-hidden="true"
    >

        <div class="mobile-navigation-inner">


            <div class="mobile-navigation-top">

                <span>
                    Navigation
                </span>

                <span>
                    WEBINERDS / 01
                </span>

            </div>


            <nav
                class="mobile-nav-links"
                aria-label="Mobile navigation"
            >

                <?php
                $navigationKeys = array_keys($navigation);
                ?>

                <?php foreach ($navigation as $index => $item): ?>

                    <?php
                    $number = array_search(
                        $index,
                        $navigationKeys,
                        true
                    ) + 1;
                    ?>

                    <a
                        href="<?php echo htmlspecialchars($item["url"], ENT_QUOTES, 'UTF-8'); ?>"
                        class="mobile-nav-link <?php echo $activePage === $index ? 'is-active' : ''; ?>"

                        <?php
                        echo $activePage === $index
                            ? 'aria-current="page"'
                            : '';
                        ?>
                    >

                        <span class="mobile-nav-number">
                            <?php echo str_pad($number, 2, "0", STR_PAD_LEFT); ?>
                        </span>

                        <span class="mobile-nav-label">
                            <?php echo htmlspecialchars($item["label"], ENT_QUOTES, 'UTF-8'); ?>
                        </span>

                        <span
                            class="mobile-nav-arrow"
                            aria-hidden="true"
                        >
                            ↗
                        </span>

                    </a>

                <?php endforeach; ?>

            </nav>


            <div class="mobile-navigation-bottom">

                <div>

                    <span class="mobile-small-label">
                        HAVE A PROJECT?
                    </span>

                    <a
                        href="<?php echo htmlspecialchars($basePath . 'pages/contact.php', ENT_QUOTES, 'UTF-8'); ?>"
                        class="mobile-project-link"
                    >
                        Start a conversation ↗
                    </a>

                </div>


                <div class="mobile-menu-meta">

                    <span>Technology</span>
                    <span>Design</span>
                    <span>Digital Products</span>

                </div>

            </div>

        </div>

    </div>

</header>


<main id="main-content">