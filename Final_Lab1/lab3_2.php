<!DOCTYPE html>
<html lang="en">

<head>

</head>

<body>

    <!-- 1. NAME FORM -->
    <form method="post">
        <fieldset>
            <legend>NAME</legend>
            <input type="text" name="name" value="">
            <hr>
            <input type="submit" name="submit_name" value="Submit">
        </fieldset>
    </form>

    <?php
    if (isset($_POST['submit_name'])) {
        $name = trim($_POST['name']);
        $isValid = true;
        $error = "";

        if (empty($name)) {
            echo "Name is required";
            $isValid = false;
        } else {
            $wordCount = 0;
            for ($i = 0; $i < strlen($name); $i++) {
                if ($name[$i] == ' ' && $i > 0 && $name[$i + 1] != ' ') {
                    $wordCount++;
                }
            }
            if ($wordCount < 1) {
                $error = "Name must contain at least two words";
                $isValid = false;
            }


            $firstChar = $name[0];
            if (!($firstChar >= 'a' && $firstChar <= 'z') && !($firstChar >= 'A' && $firstChar <= 'Z')) {
                $error = "Name must start with a letter";
                $isValid = false;
            }


            for ($i = 0; $i < strlen($name); $i++) {
                $c = $name[$i];
                if (!(($c >= 'a' && $c <= 'z') || ($c >= 'A' && $c <= 'Z') || $c == '.' || $c == '-' || $c == ' ')) {
                    $error = "Only letters, period and dash allowed";
                    $isValid = false;
                    break;
                }
            }
        }

        if ($isValid) {
            echo "Name is valid: " . $name;
        } else {
            echo $error;
        }
    }
    ?>


    <!-- 2. EMAIL FORM -->
    <form method="post">
        <fieldset>
            <legend>EMAIL</legend>
            <input type="text" name="email" value="">
            <span title="hint: sample@example.com">i</span>
            <hr>
            <input type="submit" name="submit_email" value="Submit">
        </fieldset>
    </form>

    <?php
    if (isset($_POST['submit_email'])) {
        $email = trim($_POST['email']);
        $isValid = true;
        $error = "";

        if (empty($email)) {
            echo "Email is required";
            $isValid = false;
        } else {

            $atPos = -1;
            $dotPos = -1;

            for ($i = 0; $i < strlen($email); $i++) {
                if ($email[$i] == '@')
                    $atPos = $i;
                if ($email[$i] == '.')
                    $dotPos = $i;
            }


            if ($atPos == -1 || $dotPos == -1 || $atPos == 0 || $dotPos < $atPos) {
                echo "Invalid email format";
                $isValid = false;
            }
        }

        if ($isValid) {
            echo "Email is valid: " . $email;
        }
    }
    ?>


    <!-- 3. GENDER FORM -->
    <form method="post">
        <fieldset>
            <legend>GENDER</legend>
            <input type="radio" name="gender" value="Male"> Male
            <input type="radio" name="gender" value="Female"> Female
            <input type="radio" name="gender" value="Other"> Other
            <hr>
            <input type="submit" name="submit_gender" value="Submit">
        </fieldset>
    </form>

    <?php
    if (isset($_POST['submit_gender'])) {
        if (empty($_POST['gender'])) {
            echo "Gender is required";
        } else {
            echo "Selected Gender: " . $_POST['gender'];
        }
    }
    ?>


    <!-- 4. DATE OF BIRTH FORM -->
    <form method="post">
        <fieldset>
            <legend>DATE OF BIRTH</legend>
            <input type="date" name="dob" value="">
            <hr>
            <input type="submit" name="submit_dob" value="Submit">
        </fieldset>
    </form>

    <?php
    if (isset($_POST['submit_dob'])) {
        if (empty($_POST['dob'])) {
            echo "Date of Birth is required";
        } else {
            echo "DOB Submitted: " . $_POST['dob'];
        }
    }
    ?>


    <!-- 5. DEGREE FORM -->
    <form method="post">
        <fieldset>
            <legend>DEGREE</legend>
            <input type="checkbox" name="degree[]" value="SSC"> SSC
            <input type="checkbox" name="degree[]" value="HSC"> HSC
            <input type="checkbox" name="degree[]" value="BSc"> BSc
            <input type="checkbox" name="degree[]" value="MSc"> MSc
            <hr>
            <input type="submit" name="submit_degree" value="Submit">
        </fieldset>
    </form>

    <?php
    if (isset($_POST['submit_degree'])) {
        if (empty($_POST['degree'])) {
            echo "At least two degrees must be selected";
        } elseif (count($_POST['degree']) < 2) {
            echo "At least two degrees must be selected";
        } else {
            echo "Degrees: " . implode(", ", $_POST['degree']);
        }
    }
    ?>


    <!-- 6. BLOOD GROUP FORM -->
    <form method="post">
        <fieldset>
            <legend>BLOOD GROUP</legend>
            <select name="bloodGroup">
                <option value="Select">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <hr>
            <input type="submit" name="submit_bg" value="Submit">
        </fieldset>
    </form>

    <?php
    if (isset($_POST['submit_bg'])) {
        if (empty($_POST['bloodGroup']) || $_POST['bloodGroup'] == "Select") {
            echo "Must select a blood group";
        } else {
            echo "Blood Group: " . $_POST['bloodGroup'];
        }
    }
    ?>

</body>

</html>